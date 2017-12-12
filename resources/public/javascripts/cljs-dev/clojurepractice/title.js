// Compiled by ClojureScript 0.0-3308 {}
goog.provide('clojurepractice.title');
goog.require('cljs.core');
goog.require('cljs.core.async');
clojurepractice.title.items_list = (function clojurepractice$title$items_list(EVENTCHANNEL,items,active_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__5063__auto__ = (function clojurepractice$title$items_list_$_iter__6651(s__6652){
return (new cljs.core.LazySeq(null,(function (){
var s__6652__$1 = s__6652;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6652__$1);
if(temp__4425__auto__){
var s__6652__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6652__$2)){
var c__5061__auto__ = cljs.core.chunk_first.call(null,s__6652__$2);
var size__5062__auto__ = cljs.core.count.call(null,c__5061__auto__);
var b__6654 = cljs.core.chunk_buffer.call(null,size__5062__auto__);
if((function (){var i__6653 = (0);
while(true){
if((i__6653 < size__5062__auto__)){
var item = cljs.core._nth.call(null,c__5061__auto__,i__6653);
cljs.core.chunk_append.call(null,b__6654,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__6653,item,c__5061__auto__,size__5062__auto__,b__6654,s__6652__$2,temp__4425__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(i__6653,item,c__5061__auto__,size__5062__auto__,b__6654,s__6652__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__6655 = (i__6653 + (1));
i__6653 = G__6655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6654),clojurepractice$title$items_list_$_iter__6651.call(null,cljs.core.chunk_rest.call(null,s__6652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6654),null);
}
} else {
var item = cljs.core.first.call(null,s__6652__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__6652__$2,temp__4425__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(item,s__6652__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)),clojurepractice$title$items_list_$_iter__6651.call(null,cljs.core.rest.call(null,s__6652__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__.call(null,items);
})()], null);
});

//# sourceMappingURL=title.js.map