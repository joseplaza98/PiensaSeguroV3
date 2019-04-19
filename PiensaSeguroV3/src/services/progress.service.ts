import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable, Subscriber } from "rxjs";

const TOPIC_CHAPTER_1 = 11;
const TOPIC_CHAPTER_2 = 14;
const TOPIC_CHAPTER_3 = 16;
const TOPIC_CHAPTER_4 = 11;
const TOPIC_CHAPTER_5 = 4;

@Injectable()
export class ProgressService {

    constructor(public afDB: AngularFireDatabase,
        public afAuth: AngularFireAuth) { }

    progress(): Observable<Progress> {
        return Observable.create((emitter: Subscriber<Progress>) => {
            const uid = this.afAuth.auth.currentUser.uid;
            const refProgress = this.afDB.database.ref('progress/' + uid);
            refProgress.on('value', result => {
                const obj: UserProgress = result.val();
                if (obj == null) {
                    emitter.next({
                        total: 0,
                        ch1: { progress: 0, topics: [] },
                        ch2: { progress: 0, topics: [] },
                        ch3: { progress: 0, topics: [] },
                        ch4: { progress: 0, topics: [] },
                        ch5: { progress: 0, topics: [] }
                    });
                } else {
                    const ch1 = obj.ch1 ? obj.ch1 : [];
                    const ch2 = obj.ch2 ? obj.ch2 : [];
                    const ch3 = obj.ch3 ? obj.ch3 : [];
                    const ch4 = obj.ch4 ? obj.ch4 : [];
                    const ch5 = obj.ch5 ? obj.ch5 : [];
                    emitter.next({
                        total: Math.round((ch1.length + ch2.length + ch3.length + ch4.length + ch5.length) * 100 / (TOPIC_CHAPTER_1 + TOPIC_CHAPTER_2 + TOPIC_CHAPTER_3 + TOPIC_CHAPTER_4 + TOPIC_CHAPTER_5)),
                        ch1: { progress: Math.round((ch1.length * 100 / TOPIC_CHAPTER_1)), topics: ch1 },
                        ch2: { progress: Math.round((ch2.length * 100 / TOPIC_CHAPTER_2)), topics: ch2 },
                        ch3: { progress: Math.round((ch3.length * 100 / TOPIC_CHAPTER_3)), topics: ch3 },
                        ch4: { progress: Math.round((ch4.length * 100 / TOPIC_CHAPTER_4)), topics: ch4 },
                        ch5: { progress: Math.round((ch5.length * 100 / TOPIC_CHAPTER_5)), topics: ch5 }
                    });
                }

            });

            return () => refProgress.off();
        });
    }

    validateTopic(ch: ChapterProgress, topic: number): boolean {

        return ch.topics.findIndex(x => x == topic) > -1;
    }

    validateProgress(ch: ChapterProgress, progress: number): boolean {
        return ch.progress >= progress;
    }

    updateProgress(chapter: number, topic: number) {
        const uid = this.afAuth.auth.currentUser.uid;
        this.afDB.database.ref('progress/' + uid).once('value')
            .then(x => {
                let obj: UserProgress = x.val();
                if (obj == null) {
                    obj = {
                        ch1: [],
                        ch2: [],
                        ch3: [],
                        ch4: [],
                        ch5: []
                    };
                }
                console.log('OBJ 1=>' + JSON.stringify(obj));
                const topics: number[] = obj['ch' + chapter] ? obj['ch' + chapter] : [];
                const idx = topics.findIndex(t => t == topic);
                if (idx < 0) {
                    topics.push(topic);
                    obj['ch' + chapter] = topics;
                }
                console.log('OBJ 2=>'+JSON.stringify(obj));
                return obj;
            })
            .then(x => this.afDB.database.ref('progress/' + uid).set(x));
    }

}

export class ChapterProgress {
    progress: number;
    topics: number[];
}

export class Progress {
    total: number;
    ch1: ChapterProgress;
    ch2: ChapterProgress;
    ch3: ChapterProgress;
    ch4: ChapterProgress;
    ch5: ChapterProgress;
}

class UserProgress {
    ch1?: number[];
    ch2?: number[];
    ch3?: number[];
    ch4?: number[];
    ch5?: number[];
}