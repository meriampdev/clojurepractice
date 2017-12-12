// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof helloworld.core.app_state !== 'undefined'){
} else {
helloworld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello from App State",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type1",new cljs.core.Keyword(null,"num","num",1985240673),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type1",new cljs.core.Keyword(null,"num","num",1985240673),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type2",new cljs.core.Keyword(null,"num","num",1985240673),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type2",new cljs.core.Keyword(null,"num","num",1985240673),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type1",new cljs.core.Keyword(null,"num","num",1985240673),(5)], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
}
helloworld.core.multiply = (function helloworld$core$multiply(a,b){
return (a * b);
});
helloworld.core.mapping = (function helloworld$core$mapping(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"type1"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 1 = ",helloworld.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(1))," TYPE 1"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 2 = ",helloworld.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(2))," TYPE 2"], null))], null);
});
helloworld.core.items_list = (function helloworld$core$items_list(items){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),"USING FOR LOOP ",(function (){var iter__5063__auto__ = (function helloworld$core$items_list_$_iter__7104(s__7105){
return (new cljs.core.LazySeq(null,(function (){
var s__7105__$1 = s__7105;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7105__$1);
if(temp__4425__auto__){
var s__7105__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7105__$2)){
var c__5061__auto__ = cljs.core.chunk_first.call(null,s__7105__$2);
var size__5062__auto__ = cljs.core.count.call(null,c__5061__auto__);
var b__7107 = cljs.core.chunk_buffer.call(null,size__5062__auto__);
if((function (){var i__7106 = (0);
while(true){
if((i__7106 < size__5062__auto__)){
var item = cljs.core._nth.call(null,c__5061__auto__,i__7106);
cljs.core.chunk_append.call(null,b__7107,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"type1"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 10 = ",helloworld.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(10))," TYPE 1"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 20 = ",helloworld.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(20))," TYPE 2"], null))], null));

var G__7108 = (i__7106 + (1));
i__7106 = G__7108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7107),helloworld$core$items_list_$_iter__7104.call(null,cljs.core.chunk_rest.call(null,s__7105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7107),null);
}
} else {
var item = cljs.core.first.call(null,s__7105__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"type1"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 10 = ",helloworld.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(10))," TYPE 1"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 20 = ",helloworld.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(20))," TYPE 2"], null))], null),helloworld$core$items_list_$_iter__7104.call(null,cljs.core.rest.call(null,s__7105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__.call(null,items);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),"USING MAP ",cljs.core.map.call(null,helloworld.core.mapping,items)], null)], null);
});
helloworld.core.header = (function helloworld$core$header(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"Another New Message");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),message], null)], null);
});
helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.items_list,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state)),new cljs.core.Keyword(null,"active-item","active-item",-1265645988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map