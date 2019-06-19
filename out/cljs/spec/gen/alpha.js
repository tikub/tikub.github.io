// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4829__auto__,writer__4830__auto__,opt__4831__auto__){
return cljs.core._write.call(null,writer__4830__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__5255__auto__ = [];
var len__5249__auto___37 = arguments.length;
var i__5250__auto___38 = (0);
while(true){
if((i__5250__auto___38 < len__5249__auto___37)){
args__5255__auto__.push((arguments[i__5250__auto___38]));

var G__39 = (i__5250__auto___38 + (1));
i__5250__auto___38 = G__39;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__5255__auto__ = [];
var len__5249__auto___41 = arguments.length;
var i__5250__auto___42 = (0);
while(true){
if((i__5250__auto___42 < len__5249__auto___41)){
args__5255__auto__.push((arguments[i__5250__auto___42]));

var G__43 = (i__5250__auto___42 + (1));
i__5250__auto___42 = G__43;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq40){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40));
});

var g_QMARK__44 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_45 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__44){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__44))
,null));
var mkg_46 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__44,g_45){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__44,g_45))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__44,g_45,mkg_46){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__44).call(null,x);
});})(g_QMARK__44,g_45,mkg_46))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__44,g_45,mkg_46){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_46).call(null,gfn);
});})(g_QMARK__44,g_45,mkg_46))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__44,g_45,mkg_46){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_45).call(null,generator);
});})(g_QMARK__44,g_45,mkg_46))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9167__auto___67 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9167__auto___67){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__5255__auto__ = [];
var len__5249__auto___68 = arguments.length;
var i__5250__auto___69 = (0);
while(true){
if((i__5250__auto___69 < len__5249__auto___68)){
args__5255__auto__.push((arguments[i__5250__auto___69]));

var G__70 = (i__5250__auto___69 + (1));
i__5250__auto___69 = G__70;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___67))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___67){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___67),args);
});})(g__9167__auto___67))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9167__auto___67){
return (function (seq47){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47));
});})(g__9167__auto___67))
;


var g__9167__auto___71 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9167__auto___71){
return (function cljs$spec$gen$alpha$list(var_args){
var args__5255__auto__ = [];
var len__5249__auto___72 = arguments.length;
var i__5250__auto___73 = (0);
while(true){
if((i__5250__auto___73 < len__5249__auto___72)){
args__5255__auto__.push((arguments[i__5250__auto___73]));

var G__74 = (i__5250__auto___73 + (1));
i__5250__auto___73 = G__74;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___71))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___71){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___71),args);
});})(g__9167__auto___71))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9167__auto___71){
return (function (seq48){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48));
});})(g__9167__auto___71))
;


var g__9167__auto___75 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9167__auto___75){
return (function cljs$spec$gen$alpha$map(var_args){
var args__5255__auto__ = [];
var len__5249__auto___76 = arguments.length;
var i__5250__auto___77 = (0);
while(true){
if((i__5250__auto___77 < len__5249__auto___76)){
args__5255__auto__.push((arguments[i__5250__auto___77]));

var G__78 = (i__5250__auto___77 + (1));
i__5250__auto___77 = G__78;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___75))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___75){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___75),args);
});})(g__9167__auto___75))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9167__auto___75){
return (function (seq49){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49));
});})(g__9167__auto___75))
;


var g__9167__auto___79 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9167__auto___79){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__5255__auto__ = [];
var len__5249__auto___80 = arguments.length;
var i__5250__auto___81 = (0);
while(true){
if((i__5250__auto___81 < len__5249__auto___80)){
args__5255__auto__.push((arguments[i__5250__auto___81]));

var G__82 = (i__5250__auto___81 + (1));
i__5250__auto___81 = G__82;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___79))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___79){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___79),args);
});})(g__9167__auto___79))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9167__auto___79){
return (function (seq50){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50));
});})(g__9167__auto___79))
;


var g__9167__auto___83 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9167__auto___83){
return (function cljs$spec$gen$alpha$set(var_args){
var args__5255__auto__ = [];
var len__5249__auto___84 = arguments.length;
var i__5250__auto___85 = (0);
while(true){
if((i__5250__auto___85 < len__5249__auto___84)){
args__5255__auto__.push((arguments[i__5250__auto___85]));

var G__86 = (i__5250__auto___85 + (1));
i__5250__auto___85 = G__86;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___83))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___83){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___83),args);
});})(g__9167__auto___83))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9167__auto___83){
return (function (seq51){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51));
});})(g__9167__auto___83))
;


var g__9167__auto___87 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9167__auto___87){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__5255__auto__ = [];
var len__5249__auto___88 = arguments.length;
var i__5250__auto___89 = (0);
while(true){
if((i__5250__auto___89 < len__5249__auto___88)){
args__5255__auto__.push((arguments[i__5250__auto___89]));

var G__90 = (i__5250__auto___89 + (1));
i__5250__auto___89 = G__90;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___87))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___87){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___87),args);
});})(g__9167__auto___87))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9167__auto___87){
return (function (seq52){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52));
});})(g__9167__auto___87))
;


var g__9167__auto___91 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9167__auto___91){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__5255__auto__ = [];
var len__5249__auto___92 = arguments.length;
var i__5250__auto___93 = (0);
while(true){
if((i__5250__auto___93 < len__5249__auto___92)){
args__5255__auto__.push((arguments[i__5250__auto___93]));

var G__94 = (i__5250__auto___93 + (1));
i__5250__auto___93 = G__94;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___91))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___91){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___91),args);
});})(g__9167__auto___91))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9167__auto___91){
return (function (seq53){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53));
});})(g__9167__auto___91))
;


var g__9167__auto___95 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9167__auto___95){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__5255__auto__ = [];
var len__5249__auto___96 = arguments.length;
var i__5250__auto___97 = (0);
while(true){
if((i__5250__auto___97 < len__5249__auto___96)){
args__5255__auto__.push((arguments[i__5250__auto___97]));

var G__98 = (i__5250__auto___97 + (1));
i__5250__auto___97 = G__98;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___95))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___95){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___95),args);
});})(g__9167__auto___95))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9167__auto___95){
return (function (seq54){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54));
});})(g__9167__auto___95))
;


var g__9167__auto___99 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9167__auto___99){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__5255__auto__ = [];
var len__5249__auto___100 = arguments.length;
var i__5250__auto___101 = (0);
while(true){
if((i__5250__auto___101 < len__5249__auto___100)){
args__5255__auto__.push((arguments[i__5250__auto___101]));

var G__102 = (i__5250__auto___101 + (1));
i__5250__auto___101 = G__102;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___99))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___99){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___99),args);
});})(g__9167__auto___99))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9167__auto___99){
return (function (seq55){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55));
});})(g__9167__auto___99))
;


var g__9167__auto___103 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9167__auto___103){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__5255__auto__ = [];
var len__5249__auto___104 = arguments.length;
var i__5250__auto___105 = (0);
while(true){
if((i__5250__auto___105 < len__5249__auto___104)){
args__5255__auto__.push((arguments[i__5250__auto___105]));

var G__106 = (i__5250__auto___105 + (1));
i__5250__auto___105 = G__106;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___103))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___103),args);
});})(g__9167__auto___103))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9167__auto___103){
return (function (seq56){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56));
});})(g__9167__auto___103))
;


var g__9167__auto___107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9167__auto___107){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__5255__auto__ = [];
var len__5249__auto___108 = arguments.length;
var i__5250__auto___109 = (0);
while(true){
if((i__5250__auto___109 < len__5249__auto___108)){
args__5255__auto__.push((arguments[i__5250__auto___109]));

var G__110 = (i__5250__auto___109 + (1));
i__5250__auto___109 = G__110;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___107))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___107),args);
});})(g__9167__auto___107))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9167__auto___107){
return (function (seq57){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57));
});})(g__9167__auto___107))
;


var g__9167__auto___111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9167__auto___111){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__5255__auto__ = [];
var len__5249__auto___112 = arguments.length;
var i__5250__auto___113 = (0);
while(true){
if((i__5250__auto___113 < len__5249__auto___112)){
args__5255__auto__.push((arguments[i__5250__auto___113]));

var G__114 = (i__5250__auto___113 + (1));
i__5250__auto___113 = G__114;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___111))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___111),args);
});})(g__9167__auto___111))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9167__auto___111){
return (function (seq58){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58));
});})(g__9167__auto___111))
;


var g__9167__auto___115 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9167__auto___115){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__5255__auto__ = [];
var len__5249__auto___116 = arguments.length;
var i__5250__auto___117 = (0);
while(true){
if((i__5250__auto___117 < len__5249__auto___116)){
args__5255__auto__.push((arguments[i__5250__auto___117]));

var G__118 = (i__5250__auto___117 + (1));
i__5250__auto___117 = G__118;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___115))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___115),args);
});})(g__9167__auto___115))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9167__auto___115){
return (function (seq59){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59));
});})(g__9167__auto___115))
;


var g__9167__auto___119 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9167__auto___119){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__5255__auto__ = [];
var len__5249__auto___120 = arguments.length;
var i__5250__auto___121 = (0);
while(true){
if((i__5250__auto___121 < len__5249__auto___120)){
args__5255__auto__.push((arguments[i__5250__auto___121]));

var G__122 = (i__5250__auto___121 + (1));
i__5250__auto___121 = G__122;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___119))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___119),args);
});})(g__9167__auto___119))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9167__auto___119){
return (function (seq60){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60));
});})(g__9167__auto___119))
;


var g__9167__auto___123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9167__auto___123){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__5255__auto__ = [];
var len__5249__auto___124 = arguments.length;
var i__5250__auto___125 = (0);
while(true){
if((i__5250__auto___125 < len__5249__auto___124)){
args__5255__auto__.push((arguments[i__5250__auto___125]));

var G__126 = (i__5250__auto___125 + (1));
i__5250__auto___125 = G__126;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___123))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___123),args);
});})(g__9167__auto___123))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9167__auto___123){
return (function (seq61){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61));
});})(g__9167__auto___123))
;


var g__9167__auto___127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9167__auto___127){
return (function cljs$spec$gen$alpha$return(var_args){
var args__5255__auto__ = [];
var len__5249__auto___128 = arguments.length;
var i__5250__auto___129 = (0);
while(true){
if((i__5250__auto___129 < len__5249__auto___128)){
args__5255__auto__.push((arguments[i__5250__auto___129]));

var G__130 = (i__5250__auto___129 + (1));
i__5250__auto___129 = G__130;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___127))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___127),args);
});})(g__9167__auto___127))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9167__auto___127){
return (function (seq62){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62));
});})(g__9167__auto___127))
;


var g__9167__auto___131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9167__auto___131){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__5255__auto__ = [];
var len__5249__auto___132 = arguments.length;
var i__5250__auto___133 = (0);
while(true){
if((i__5250__auto___133 < len__5249__auto___132)){
args__5255__auto__.push((arguments[i__5250__auto___133]));

var G__134 = (i__5250__auto___133 + (1));
i__5250__auto___133 = G__134;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___131))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___131),args);
});})(g__9167__auto___131))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9167__auto___131){
return (function (seq63){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63));
});})(g__9167__auto___131))
;


var g__9167__auto___135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9167__auto___135){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__5255__auto__ = [];
var len__5249__auto___136 = arguments.length;
var i__5250__auto___137 = (0);
while(true){
if((i__5250__auto___137 < len__5249__auto___136)){
args__5255__auto__.push((arguments[i__5250__auto___137]));

var G__138 = (i__5250__auto___137 + (1));
i__5250__auto___137 = G__138;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___135))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___135),args);
});})(g__9167__auto___135))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9167__auto___135){
return (function (seq64){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64));
});})(g__9167__auto___135))
;


var g__9167__auto___139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9167__auto___139){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__5255__auto__ = [];
var len__5249__auto___140 = arguments.length;
var i__5250__auto___141 = (0);
while(true){
if((i__5250__auto___141 < len__5249__auto___140)){
args__5255__auto__.push((arguments[i__5250__auto___141]));

var G__142 = (i__5250__auto___141 + (1));
i__5250__auto___141 = G__142;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___139))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___139),args);
});})(g__9167__auto___139))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9167__auto___139){
return (function (seq65){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65));
});})(g__9167__auto___139))
;


var g__9167__auto___143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__9167__auto___143){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__5255__auto__ = [];
var len__5249__auto___144 = arguments.length;
var i__5250__auto___145 = (0);
while(true){
if((i__5250__auto___145 < len__5249__auto___144)){
args__5255__auto__.push((arguments[i__5250__auto___145]));

var G__146 = (i__5250__auto___145 + (1));
i__5250__auto___145 = G__146;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9167__auto___143))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9167__auto___143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9167__auto___143),args);
});})(g__9167__auto___143))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__9167__auto___143){
return (function (seq66){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66));
});})(g__9167__auto___143))
;

var g__9172__auto___168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9172__auto___168){
return (function cljs$spec$gen$alpha$any(var_args){
var args__5255__auto__ = [];
var len__5249__auto___169 = arguments.length;
var i__5250__auto___170 = (0);
while(true){
if((i__5250__auto___170 < len__5249__auto___169)){
args__5255__auto__.push((arguments[i__5250__auto___170]));

var G__171 = (i__5250__auto___170 + (1));
i__5250__auto___170 = G__171;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___168))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___168){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___168);
});})(g__9172__auto___168))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9172__auto___168){
return (function (seq147){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq147));
});})(g__9172__auto___168))
;


var g__9172__auto___172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9172__auto___172){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__5255__auto__ = [];
var len__5249__auto___173 = arguments.length;
var i__5250__auto___174 = (0);
while(true){
if((i__5250__auto___174 < len__5249__auto___173)){
args__5255__auto__.push((arguments[i__5250__auto___174]));

var G__175 = (i__5250__auto___174 + (1));
i__5250__auto___174 = G__175;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___172))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___172){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___172);
});})(g__9172__auto___172))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9172__auto___172){
return (function (seq148){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq148));
});})(g__9172__auto___172))
;


var g__9172__auto___176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9172__auto___176){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__5255__auto__ = [];
var len__5249__auto___177 = arguments.length;
var i__5250__auto___178 = (0);
while(true){
if((i__5250__auto___178 < len__5249__auto___177)){
args__5255__auto__.push((arguments[i__5250__auto___178]));

var G__179 = (i__5250__auto___178 + (1));
i__5250__auto___178 = G__179;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___176))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___176){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___176);
});})(g__9172__auto___176))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9172__auto___176){
return (function (seq149){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq149));
});})(g__9172__auto___176))
;


var g__9172__auto___180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9172__auto___180){
return (function cljs$spec$gen$alpha$char(var_args){
var args__5255__auto__ = [];
var len__5249__auto___181 = arguments.length;
var i__5250__auto___182 = (0);
while(true){
if((i__5250__auto___182 < len__5249__auto___181)){
args__5255__auto__.push((arguments[i__5250__auto___182]));

var G__183 = (i__5250__auto___182 + (1));
i__5250__auto___182 = G__183;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___180))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___180){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___180);
});})(g__9172__auto___180))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9172__auto___180){
return (function (seq150){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150));
});})(g__9172__auto___180))
;


var g__9172__auto___184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9172__auto___184){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__5255__auto__ = [];
var len__5249__auto___185 = arguments.length;
var i__5250__auto___186 = (0);
while(true){
if((i__5250__auto___186 < len__5249__auto___185)){
args__5255__auto__.push((arguments[i__5250__auto___186]));

var G__187 = (i__5250__auto___186 + (1));
i__5250__auto___186 = G__187;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___184))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___184){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___184);
});})(g__9172__auto___184))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9172__auto___184){
return (function (seq151){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151));
});})(g__9172__auto___184))
;


var g__9172__auto___188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9172__auto___188){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__5255__auto__ = [];
var len__5249__auto___189 = arguments.length;
var i__5250__auto___190 = (0);
while(true){
if((i__5250__auto___190 < len__5249__auto___189)){
args__5255__auto__.push((arguments[i__5250__auto___190]));

var G__191 = (i__5250__auto___190 + (1));
i__5250__auto___190 = G__191;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___188))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___188){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___188);
});})(g__9172__auto___188))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9172__auto___188){
return (function (seq152){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152));
});})(g__9172__auto___188))
;


var g__9172__auto___192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9172__auto___192){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__5255__auto__ = [];
var len__5249__auto___193 = arguments.length;
var i__5250__auto___194 = (0);
while(true){
if((i__5250__auto___194 < len__5249__auto___193)){
args__5255__auto__.push((arguments[i__5250__auto___194]));

var G__195 = (i__5250__auto___194 + (1));
i__5250__auto___194 = G__195;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___192))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___192){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___192);
});})(g__9172__auto___192))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9172__auto___192){
return (function (seq153){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq153));
});})(g__9172__auto___192))
;


var g__9172__auto___196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9172__auto___196){
return (function cljs$spec$gen$alpha$double(var_args){
var args__5255__auto__ = [];
var len__5249__auto___197 = arguments.length;
var i__5250__auto___198 = (0);
while(true){
if((i__5250__auto___198 < len__5249__auto___197)){
args__5255__auto__.push((arguments[i__5250__auto___198]));

var G__199 = (i__5250__auto___198 + (1));
i__5250__auto___198 = G__199;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___196))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___196){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___196);
});})(g__9172__auto___196))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9172__auto___196){
return (function (seq154){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154));
});})(g__9172__auto___196))
;


var g__9172__auto___200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9172__auto___200){
return (function cljs$spec$gen$alpha$int(var_args){
var args__5255__auto__ = [];
var len__5249__auto___201 = arguments.length;
var i__5250__auto___202 = (0);
while(true){
if((i__5250__auto___202 < len__5249__auto___201)){
args__5255__auto__.push((arguments[i__5250__auto___202]));

var G__203 = (i__5250__auto___202 + (1));
i__5250__auto___202 = G__203;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___200))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___200){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___200);
});})(g__9172__auto___200))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9172__auto___200){
return (function (seq155){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155));
});})(g__9172__auto___200))
;


var g__9172__auto___204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9172__auto___204){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__5255__auto__ = [];
var len__5249__auto___205 = arguments.length;
var i__5250__auto___206 = (0);
while(true){
if((i__5250__auto___206 < len__5249__auto___205)){
args__5255__auto__.push((arguments[i__5250__auto___206]));

var G__207 = (i__5250__auto___206 + (1));
i__5250__auto___206 = G__207;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___204))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___204){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___204);
});})(g__9172__auto___204))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9172__auto___204){
return (function (seq156){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156));
});})(g__9172__auto___204))
;


var g__9172__auto___208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9172__auto___208){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__5255__auto__ = [];
var len__5249__auto___209 = arguments.length;
var i__5250__auto___210 = (0);
while(true){
if((i__5250__auto___210 < len__5249__auto___209)){
args__5255__auto__.push((arguments[i__5250__auto___210]));

var G__211 = (i__5250__auto___210 + (1));
i__5250__auto___210 = G__211;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___208))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___208){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___208);
});})(g__9172__auto___208))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9172__auto___208){
return (function (seq157){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq157));
});})(g__9172__auto___208))
;


var g__9172__auto___212 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9172__auto___212){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__5255__auto__ = [];
var len__5249__auto___213 = arguments.length;
var i__5250__auto___214 = (0);
while(true){
if((i__5250__auto___214 < len__5249__auto___213)){
args__5255__auto__.push((arguments[i__5250__auto___214]));

var G__215 = (i__5250__auto___214 + (1));
i__5250__auto___214 = G__215;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___212))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___212){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___212);
});})(g__9172__auto___212))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9172__auto___212){
return (function (seq158){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq158));
});})(g__9172__auto___212))
;


var g__9172__auto___216 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9172__auto___216){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__5255__auto__ = [];
var len__5249__auto___217 = arguments.length;
var i__5250__auto___218 = (0);
while(true){
if((i__5250__auto___218 < len__5249__auto___217)){
args__5255__auto__.push((arguments[i__5250__auto___218]));

var G__219 = (i__5250__auto___218 + (1));
i__5250__auto___218 = G__219;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___216))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___216){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___216);
});})(g__9172__auto___216))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9172__auto___216){
return (function (seq159){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq159));
});})(g__9172__auto___216))
;


var g__9172__auto___220 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9172__auto___220){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__5255__auto__ = [];
var len__5249__auto___221 = arguments.length;
var i__5250__auto___222 = (0);
while(true){
if((i__5250__auto___222 < len__5249__auto___221)){
args__5255__auto__.push((arguments[i__5250__auto___222]));

var G__223 = (i__5250__auto___222 + (1));
i__5250__auto___222 = G__223;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___220))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___220){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___220);
});})(g__9172__auto___220))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9172__auto___220){
return (function (seq160){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq160));
});})(g__9172__auto___220))
;


var g__9172__auto___224 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9172__auto___224){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__5255__auto__ = [];
var len__5249__auto___225 = arguments.length;
var i__5250__auto___226 = (0);
while(true){
if((i__5250__auto___226 < len__5249__auto___225)){
args__5255__auto__.push((arguments[i__5250__auto___226]));

var G__227 = (i__5250__auto___226 + (1));
i__5250__auto___226 = G__227;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___224))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___224){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___224);
});})(g__9172__auto___224))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9172__auto___224){
return (function (seq161){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq161));
});})(g__9172__auto___224))
;


var g__9172__auto___228 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9172__auto___228){
return (function cljs$spec$gen$alpha$string(var_args){
var args__5255__auto__ = [];
var len__5249__auto___229 = arguments.length;
var i__5250__auto___230 = (0);
while(true){
if((i__5250__auto___230 < len__5249__auto___229)){
args__5255__auto__.push((arguments[i__5250__auto___230]));

var G__231 = (i__5250__auto___230 + (1));
i__5250__auto___230 = G__231;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___228))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___228){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___228);
});})(g__9172__auto___228))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9172__auto___228){
return (function (seq162){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq162));
});})(g__9172__auto___228))
;


var g__9172__auto___232 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9172__auto___232){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__5255__auto__ = [];
var len__5249__auto___233 = arguments.length;
var i__5250__auto___234 = (0);
while(true){
if((i__5250__auto___234 < len__5249__auto___233)){
args__5255__auto__.push((arguments[i__5250__auto___234]));

var G__235 = (i__5250__auto___234 + (1));
i__5250__auto___234 = G__235;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___232))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___232){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___232);
});})(g__9172__auto___232))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9172__auto___232){
return (function (seq163){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq163));
});})(g__9172__auto___232))
;


var g__9172__auto___236 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9172__auto___236){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__5255__auto__ = [];
var len__5249__auto___237 = arguments.length;
var i__5250__auto___238 = (0);
while(true){
if((i__5250__auto___238 < len__5249__auto___237)){
args__5255__auto__.push((arguments[i__5250__auto___238]));

var G__239 = (i__5250__auto___238 + (1));
i__5250__auto___238 = G__239;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___236))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___236){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___236);
});})(g__9172__auto___236))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9172__auto___236){
return (function (seq164){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164));
});})(g__9172__auto___236))
;


var g__9172__auto___240 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9172__auto___240){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__5255__auto__ = [];
var len__5249__auto___241 = arguments.length;
var i__5250__auto___242 = (0);
while(true){
if((i__5250__auto___242 < len__5249__auto___241)){
args__5255__auto__.push((arguments[i__5250__auto___242]));

var G__243 = (i__5250__auto___242 + (1));
i__5250__auto___242 = G__243;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___240))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___240){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___240);
});})(g__9172__auto___240))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9172__auto___240){
return (function (seq165){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165));
});})(g__9172__auto___240))
;


var g__9172__auto___244 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9172__auto___244){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__5255__auto__ = [];
var len__5249__auto___245 = arguments.length;
var i__5250__auto___246 = (0);
while(true){
if((i__5250__auto___246 < len__5249__auto___245)){
args__5255__auto__.push((arguments[i__5250__auto___246]));

var G__247 = (i__5250__auto___246 + (1));
i__5250__auto___246 = G__247;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___244))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___244){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___244);
});})(g__9172__auto___244))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9172__auto___244){
return (function (seq166){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166));
});})(g__9172__auto___244))
;


var g__9172__auto___248 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9172__auto___248){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__5255__auto__ = [];
var len__5249__auto___249 = arguments.length;
var i__5250__auto___250 = (0);
while(true){
if((i__5250__auto___250 < len__5249__auto___249)){
args__5255__auto__.push((arguments[i__5250__auto___250]));

var G__251 = (i__5250__auto___250 + (1));
i__5250__auto___250 = G__251;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});})(g__9172__auto___248))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9172__auto___248){
return (function (args){
return cljs.core.deref.call(null,g__9172__auto___248);
});})(g__9172__auto___248))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9172__auto___248){
return (function (seq167){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq167));
});})(g__9172__auto___248))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__5255__auto__ = [];
var len__5249__auto___254 = arguments.length;
var i__5250__auto___255 = (0);
while(true){
if((i__5250__auto___255 < len__5249__auto___254)){
args__5255__auto__.push((arguments[i__5250__auto___255]));

var G__256 = (i__5250__auto___255 + (1));
i__5250__auto___255 = G__256;
continue;
} else {
}
break;
}

var argseq__5256__auto__ = ((((0) < args__5255__auto__.length))?(new cljs.core.IndexedSeq(args__5255__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__5256__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__252_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__252_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq253){
var self__5235__auto__ = this;
return self__5235__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq253));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__258_SHARP_){
return (new Date(p1__258_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__257_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__257_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
