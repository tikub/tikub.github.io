// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__990){
var map__991 = p__990;
var map__991__$1 = (((((!((map__991 == null))))?(((((map__991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__991):map__991);
var m = map__991__$1;
var n = cljs.core.get.call(null,map__991__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4540__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return [(function (){var temp__5535__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5535__auto__)){
var ns = temp__5535__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__993_1025 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__994_1026 = null;
var count__995_1027 = (0);
var i__996_1028 = (0);
while(true){
if((i__996_1028 < count__995_1027)){
var f_1029 = cljs.core._nth.call(null,chunk__994_1026,i__996_1028);
cljs.core.println.call(null,"  ",f_1029);


var G__1030 = seq__993_1025;
var G__1031 = chunk__994_1026;
var G__1032 = count__995_1027;
var G__1033 = (i__996_1028 + (1));
seq__993_1025 = G__1030;
chunk__994_1026 = G__1031;
count__995_1027 = G__1032;
i__996_1028 = G__1033;
continue;
} else {
var temp__5535__auto___1034 = cljs.core.seq.call(null,seq__993_1025);
if(temp__5535__auto___1034){
var seq__993_1035__$1 = temp__5535__auto___1034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__993_1035__$1)){
var c__5053__auto___1036 = cljs.core.chunk_first.call(null,seq__993_1035__$1);
var G__1037 = cljs.core.chunk_rest.call(null,seq__993_1035__$1);
var G__1038 = c__5053__auto___1036;
var G__1039 = cljs.core.count.call(null,c__5053__auto___1036);
var G__1040 = (0);
seq__993_1025 = G__1037;
chunk__994_1026 = G__1038;
count__995_1027 = G__1039;
i__996_1028 = G__1040;
continue;
} else {
var f_1041 = cljs.core.first.call(null,seq__993_1035__$1);
cljs.core.println.call(null,"  ",f_1041);


var G__1042 = cljs.core.next.call(null,seq__993_1035__$1);
var G__1043 = null;
var G__1044 = (0);
var G__1045 = (0);
seq__993_1025 = G__1042;
chunk__994_1026 = G__1043;
count__995_1027 = G__1044;
i__996_1028 = G__1045;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1046 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4540__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1046);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1046)))?cljs.core.second.call(null,arglists_1046):arglists_1046));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__997_1047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__998_1048 = null;
var count__999_1049 = (0);
var i__1000_1050 = (0);
while(true){
if((i__1000_1050 < count__999_1049)){
var vec__1011_1051 = cljs.core._nth.call(null,chunk__998_1048,i__1000_1050);
var name_1052 = cljs.core.nth.call(null,vec__1011_1051,(0),null);
var map__1014_1053 = cljs.core.nth.call(null,vec__1011_1051,(1),null);
var map__1014_1054__$1 = (((((!((map__1014_1053 == null))))?(((((map__1014_1053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1014_1053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1014_1053):map__1014_1053);
var doc_1055 = cljs.core.get.call(null,map__1014_1054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1056 = cljs.core.get.call(null,map__1014_1054__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1052);

cljs.core.println.call(null," ",arglists_1056);

if(cljs.core.truth_(doc_1055)){
cljs.core.println.call(null," ",doc_1055);
} else {
}


var G__1057 = seq__997_1047;
var G__1058 = chunk__998_1048;
var G__1059 = count__999_1049;
var G__1060 = (i__1000_1050 + (1));
seq__997_1047 = G__1057;
chunk__998_1048 = G__1058;
count__999_1049 = G__1059;
i__1000_1050 = G__1060;
continue;
} else {
var temp__5535__auto___1061 = cljs.core.seq.call(null,seq__997_1047);
if(temp__5535__auto___1061){
var seq__997_1062__$1 = temp__5535__auto___1061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__997_1062__$1)){
var c__5053__auto___1063 = cljs.core.chunk_first.call(null,seq__997_1062__$1);
var G__1064 = cljs.core.chunk_rest.call(null,seq__997_1062__$1);
var G__1065 = c__5053__auto___1063;
var G__1066 = cljs.core.count.call(null,c__5053__auto___1063);
var G__1067 = (0);
seq__997_1047 = G__1064;
chunk__998_1048 = G__1065;
count__999_1049 = G__1066;
i__1000_1050 = G__1067;
continue;
} else {
var vec__1016_1068 = cljs.core.first.call(null,seq__997_1062__$1);
var name_1069 = cljs.core.nth.call(null,vec__1016_1068,(0),null);
var map__1019_1070 = cljs.core.nth.call(null,vec__1016_1068,(1),null);
var map__1019_1071__$1 = (((((!((map__1019_1070 == null))))?(((((map__1019_1070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1019_1070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1019_1070):map__1019_1070);
var doc_1072 = cljs.core.get.call(null,map__1019_1071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1073 = cljs.core.get.call(null,map__1019_1071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1069);

cljs.core.println.call(null," ",arglists_1073);

if(cljs.core.truth_(doc_1072)){
cljs.core.println.call(null," ",doc_1072);
} else {
}


var G__1074 = cljs.core.next.call(null,seq__997_1062__$1);
var G__1075 = null;
var G__1076 = (0);
var G__1077 = (0);
seq__997_1047 = G__1074;
chunk__998_1048 = G__1075;
count__999_1049 = G__1076;
i__1000_1050 = G__1077;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5535__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5535__auto__)){
var fnspec = temp__5535__auto__;
cljs.core.print.call(null,"Spec");

var seq__1021 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1022 = null;
var count__1023 = (0);
var i__1024 = (0);
while(true){
if((i__1024 < count__1023)){
var role = cljs.core._nth.call(null,chunk__1022,i__1024);
var temp__5535__auto___1078__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___1078__$1)){
var spec_1079 = temp__5535__auto___1078__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1079));
} else {
}


var G__1080 = seq__1021;
var G__1081 = chunk__1022;
var G__1082 = count__1023;
var G__1083 = (i__1024 + (1));
seq__1021 = G__1080;
chunk__1022 = G__1081;
count__1023 = G__1082;
i__1024 = G__1083;
continue;
} else {
var temp__5535__auto____$1 = cljs.core.seq.call(null,seq__1021);
if(temp__5535__auto____$1){
var seq__1021__$1 = temp__5535__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1021__$1)){
var c__5053__auto__ = cljs.core.chunk_first.call(null,seq__1021__$1);
var G__1084 = cljs.core.chunk_rest.call(null,seq__1021__$1);
var G__1085 = c__5053__auto__;
var G__1086 = cljs.core.count.call(null,c__5053__auto__);
var G__1087 = (0);
seq__1021 = G__1084;
chunk__1022 = G__1085;
count__1023 = G__1086;
i__1024 = G__1087;
continue;
} else {
var role = cljs.core.first.call(null,seq__1021__$1);
var temp__5535__auto___1088__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___1088__$2)){
var spec_1089 = temp__5535__auto___1088__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1089));
} else {
}


var G__1090 = cljs.core.next.call(null,seq__1021__$1);
var G__1091 = null;
var G__1092 = (0);
var G__1093 = (0);
seq__1021 = G__1090;
chunk__1022 = G__1091;
count__1023 = G__1092;
i__1024 = G__1093;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5535__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5535__auto__)){
var msg = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5535__auto__)){
var ed = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1094 = cljs.core.conj.call(null,via,t);
var G__1095 = cljs.core.ex_cause.call(null,t);
via = G__1094;
t = G__1095;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5535__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5535__auto__)){
var root_msg = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5535__auto__)){
var data = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5535__auto__)){
var phase = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1098 = datafied_throwable;
var map__1098__$1 = (((((!((map__1098 == null))))?(((((map__1098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1098):map__1098);
var via = cljs.core.get.call(null,map__1098__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1098__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1098__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1099 = cljs.core.last.call(null,via);
var map__1099__$1 = (((((!((map__1099 == null))))?(((((map__1099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1099):map__1099);
var type = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1100 = data;
var map__1100__$1 = (((((!((map__1100 == null))))?(((((map__1100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1100):map__1100);
var problems = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1101 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1101__$1 = (((((!((map__1101 == null))))?(((((map__1101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1101):map__1101);
var top_data = map__1101__$1;
var source = cljs.core.get.call(null,map__1101__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1106 = phase;
var G__1106__$1 = (((G__1106 instanceof cljs.core.Keyword))?G__1106.fqn:null);
switch (G__1106__$1) {
case "read-source":
var map__1107 = data;
var map__1107__$1 = (((((!((map__1107 == null))))?(((((map__1107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1107):map__1107);
var line = cljs.core.get.call(null,map__1107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1109 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1109__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1109,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1109);
var G__1109__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1109__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1109__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1109__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1109__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1110 = top_data;
var G__1110__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1110,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1110);
var G__1110__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1110__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1110__$1);
var G__1110__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1110__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1110__$2);
var G__1110__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1110__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1110__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1110__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1110__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1111 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1111,(0),null);
var method = cljs.core.nth.call(null,vec__1111,(1),null);
var file = cljs.core.nth.call(null,vec__1111,(2),null);
var line = cljs.core.nth.call(null,vec__1111,(3),null);
var G__1114 = top_data;
var G__1114__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1114,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1114);
var G__1114__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1114__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1114__$1);
var G__1114__$3 = (cljs.core.truth_((function (){var and__4529__auto__ = source__$1;
if(cljs.core.truth_(and__4529__auto__)){
return method;
} else {
return and__4529__auto__;
}
})())?cljs.core.assoc.call(null,G__1114__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1114__$2);
var G__1114__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1114__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1114__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1114__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1114__$4;
}

break;
case "execution":
var vec__1115 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1115,(0),null);
var method = cljs.core.nth.call(null,vec__1115,(1),null);
var file = cljs.core.nth.call(null,vec__1115,(2),null);
var line = cljs.core.nth.call(null,vec__1115,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__1115,source__$1,method,file,line,G__1106,G__1106__$1,map__1098,map__1098__$1,via,trace,phase,map__1099,map__1099__$1,type,message,data,map__1100,map__1100__$1,problems,fn,caller,map__1101,map__1101__$1,top_data,source){
return (function (p1__1097_SHARP_){
var or__4540__auto__ = (p1__1097_SHARP_ == null);
if(or__4540__auto__){
return or__4540__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1097_SHARP_);
}
});})(vec__1115,source__$1,method,file,line,G__1106,G__1106__$1,map__1098,map__1098__$1,via,trace,phase,map__1099,map__1099__$1,type,message,data,map__1100,map__1100__$1,problems,fn,caller,map__1101,map__1101__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4540__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return line;
}
})();
var G__1118 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1118__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1118,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1118);
var G__1118__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1118__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1118__$1);
var G__1118__$3 = (cljs.core.truth_((function (){var or__4540__auto__ = fn;
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
var and__4529__auto__ = source__$1;
if(cljs.core.truth_(and__4529__auto__)){
return method;
} else {
return and__4529__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1118__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4540__auto__ = fn;
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1118__$2);
var G__1118__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1118__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1118__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1118__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1118__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1106__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1122){
var map__1123 = p__1122;
var map__1123__$1 = (((((!((map__1123 == null))))?(((((map__1123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1123):map__1123);
var triage_data = map__1123__$1;
var phase = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1123__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4540__auto__ = source;
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4540__auto__ = line;
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4540__auto__ = class$;
if(cljs.core.truth_(or__4540__auto__)){
return or__4540__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1125 = phase;
var G__1125__$1 = (((G__1125 instanceof cljs.core.Keyword))?G__1125.fqn:null);
switch (G__1125__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5170__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1126_1135 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1127_1136 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1128_1137 = true;
var _STAR_print_fn_STAR__temp_val__1129_1138 = ((function (_STAR_print_newline_STAR__orig_val__1126_1135,_STAR_print_fn_STAR__orig_val__1127_1136,_STAR_print_newline_STAR__temp_val__1128_1137,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__5171__auto__){
return sb__5170__auto__.append(x__5171__auto__);
});})(_STAR_print_newline_STAR__orig_val__1126_1135,_STAR_print_fn_STAR__orig_val__1127_1136,_STAR_print_newline_STAR__temp_val__1128_1137,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1128_1137;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1129_1138;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1126_1135,_STAR_print_fn_STAR__orig_val__1127_1136,_STAR_print_newline_STAR__temp_val__1128_1137,_STAR_print_fn_STAR__temp_val__1129_1138,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1126_1135,_STAR_print_fn_STAR__orig_val__1127_1136,_STAR_print_newline_STAR__temp_val__1128_1137,_STAR_print_fn_STAR__temp_val__1129_1138,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1120_SHARP_){
return cljs.core.dissoc.call(null,p1__1120_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1126_1135,_STAR_print_fn_STAR__orig_val__1127_1136,_STAR_print_newline_STAR__temp_val__1128_1137,_STAR_print_fn_STAR__temp_val__1129_1138,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1126_1135,_STAR_print_fn_STAR__orig_val__1127_1136,_STAR_print_newline_STAR__temp_val__1128_1137,_STAR_print_fn_STAR__temp_val__1129_1138,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1127_1136;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1126_1135;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5170__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5170__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1130_1139 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1131_1140 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1132_1141 = true;
var _STAR_print_fn_STAR__temp_val__1133_1142 = ((function (_STAR_print_newline_STAR__orig_val__1130_1139,_STAR_print_fn_STAR__orig_val__1131_1140,_STAR_print_newline_STAR__temp_val__1132_1141,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__5171__auto__){
return sb__5170__auto__.append(x__5171__auto__);
});})(_STAR_print_newline_STAR__orig_val__1130_1139,_STAR_print_fn_STAR__orig_val__1131_1140,_STAR_print_newline_STAR__temp_val__1132_1141,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1132_1141;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1133_1142;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1130_1139,_STAR_print_fn_STAR__orig_val__1131_1140,_STAR_print_newline_STAR__temp_val__1132_1141,_STAR_print_fn_STAR__temp_val__1133_1142,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1130_1139,_STAR_print_fn_STAR__orig_val__1131_1140,_STAR_print_newline_STAR__temp_val__1132_1141,_STAR_print_fn_STAR__temp_val__1133_1142,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1121_SHARP_){
return cljs.core.dissoc.call(null,p1__1121_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1130_1139,_STAR_print_fn_STAR__orig_val__1131_1140,_STAR_print_newline_STAR__temp_val__1132_1141,_STAR_print_fn_STAR__temp_val__1133_1142,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1130_1139,_STAR_print_fn_STAR__orig_val__1131_1140,_STAR_print_newline_STAR__temp_val__1132_1141,_STAR_print_fn_STAR__temp_val__1133_1142,sb__5170__auto__,G__1125,G__1125__$1,loc,class_name,simple_class,cause_type,format,map__1123,map__1123__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1131_1140;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1130_1139;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5170__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1125__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
