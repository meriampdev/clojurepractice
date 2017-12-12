// Compiled by ClojureScript 0.0-3308 {}
goog.provide('clojurepractice.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof clojurepractice.core.app_state !== 'undefined'){
} else {
clojurepractice.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"iteration","iteration",-1088952049),"FOR",new cljs.core.Keyword(null,"inputValue","inputValue",-585937919),"",new cljs.core.Keyword(null,"message","message",-406056002),"Hello from App State",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type1",new cljs.core.Keyword(null,"num","num",1985240673),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type1",new cljs.core.Keyword(null,"num","num",1985240673),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type2",new cljs.core.Keyword(null,"num","num",1985240673),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type2",new cljs.core.Keyword(null,"num","num",1985240673),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"Item",new cljs.core.Keyword(null,"type","type",1174270348),"type1",new cljs.core.Keyword(null,"num","num",1985240673),(5)], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
}
clojurepractice.core.multiply = (function clojurepractice$core$multiply(a,b){
return (a * b);
});
clojurepractice.core.mapping = (function clojurepractice$core$mapping(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"type1"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 1 = ",clojurepractice.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(1))," TYPE 1"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 2 = ",clojurepractice.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(2))," TYPE 2"], null))], null);
});
clojurepractice.core.items_list = (function clojurepractice$core$items_list(items,iteration){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),((cljs.core._EQ_.call(null,iteration,"FOR"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"USING FOR LOOP ",(function (){var iter__5063__auto__ = (function clojurepractice$core$items_list_$_iter__6823(s__6824){
return (new cljs.core.LazySeq(null,(function (){
var s__6824__$1 = s__6824;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6824__$1);
if(temp__4425__auto__){
var s__6824__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6824__$2)){
var c__5061__auto__ = cljs.core.chunk_first.call(null,s__6824__$2);
var size__5062__auto__ = cljs.core.count.call(null,c__5061__auto__);
var b__6826 = cljs.core.chunk_buffer.call(null,size__5062__auto__);
if((function (){var i__6825 = (0);
while(true){
if((i__6825 < size__5062__auto__)){
var item = cljs.core._nth.call(null,c__5061__auto__,i__6825);
cljs.core.chunk_append.call(null,b__6826,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"type1"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 10 = ",clojurepractice.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(10))," TYPE 1"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 20 = ",clojurepractice.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(20))," TYPE 2"], null))], null));

var G__6827 = (i__6825 + (1));
i__6825 = G__6827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6826),clojurepractice$core$items_list_$_iter__6823.call(null,cljs.core.chunk_rest.call(null,s__6824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6826),null);
}
} else {
var item = cljs.core.first.call(null,s__6824__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"type1"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 10 = ",clojurepractice.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(10))," TYPE 1"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item)," * 20 = ",clojurepractice.core.multiply.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(item),(20))," TYPE 2"], null))], null),clojurepractice$core$items_list_$_iter__6823.call(null,cljs.core.rest.call(null,s__6824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__.call(null,items);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),"USING MAP ",cljs.core.map.call(null,clojurepractice.core.mapping,items)], null))], null);
});
clojurepractice.core.header = (function clojurepractice$core$header(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.swap_BANG_.call(null,clojurepractice.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"Another New Message");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),message], null)], null);
});
clojurepractice.core.buttons = (function clojurepractice$core$buttons(iteration){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),"PREFERRED ITERATION",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.swap_BANG_.call(null,clojurepractice.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iteration","iteration",-1088952049)], null),"FOR");
})], null),"FOR"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.swap_BANG_.call(null,clojurepractice.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iteration","iteration",-1088952049)], null),"MAP");
})], null),"MAP"], null)], null);
});
clojurepractice.core.inputs = (function clojurepractice$core$inputs(inputValue){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"DARTHVADER!",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.call(null,clojurepractice.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputValue","inputValue",-585937919)], null),"haha");
})], null)], null);
});
clojurepractice.core.app = (function clojurepractice$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurepractice.core.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojurepractice.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurepractice.core.buttons,new cljs.core.Keyword(null,"iteration","iteration",-1088952049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojurepractice.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurepractice.core.inputs,new cljs.core.Keyword(null,"inputValue","inputValue",-585937919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojurepractice.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurepractice.core.items_list,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojurepractice.core.app_state)),new cljs.core.Keyword(null,"iteration","iteration",-1088952049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojurepractice.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurepractice.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map