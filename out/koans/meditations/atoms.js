// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.atoms');
goog.require('cljs.core');
koans.meditations.atoms.koans = cljs.core.list("Atoms are like refs","(= :__ @atomic-clock)","You can change at the swap meet","(= :__ (do\n          (swap! atomic-clock inc)\n          @atomic-clock))","Keep taxes out of this: swapping requires no transaction","(= 5 (do\n         :__\n         @atomic-clock))","Any number of arguments might happen during a swap","(= :__ (do\n          (swap! atomic-clock + 1 2 3 4 5)\n          @atomic-clock))","Atomic atoms are atomic","(= :__ (do\n          (compare-and-set! atomic-clock 100 :fin)\n          @atomic-clock))","When your expectations are aligned with reality things, proceed that way","(= :fin (do\n            (compare-and-set! :__)\n            @atomic-clock))");
koans.meditations.atoms.fns = cljs.core.PersistentVector.fromArray([cljs.core.list(new cljs.core.Symbol(null,"def","def",-1640432194,null),new cljs.core.Symbol(null,"atomic-clock","atomic-clock",1878504357,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",-1637526774,null),0))], true);

//# sourceMappingURL=atoms.js.map