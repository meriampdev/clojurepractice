(ns clojurepractice.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require [reagent.core :as reagent]))

; (def EVENTCHANNEL (chan))

(defonce app-state
  (reagent/atom
    {
      :iteration "FOR"
      :inputValue ""
      :message "Hello from App State"
      :items [{:display "Item" :type "type1" :num 1}
            {:display "Item" :type "type1" :num 2}
            {:display "Item" :type "type2" :num 3}
            {:display "Item" :type "type2" :num 4}
            {:display "Item" :type "type1" :num 5}]
      :active-item {}
    }))

; (def EVENTS
;   {:update-active-item (fn [{:keys [active-item]}]
;                          (swap! app-state assoc-in [:active-item] active-item))})

; (go
;   (while true
;     (let [[event-name event-data] (<! EVENTCHANNEL)]
;       ((event-name EVENTS) event-data))))

(defn multiply [a b]
  (* a b)
)

(defn mapping [item]
  [:div {:class "items"}
    (if (= (:type item) "type1")
      [:p
        (:num item) " * 1 = "
        (multiply (:num item) 1)
        " TYPE 1"
      ]
      [:p
        (:num item) " * 2 = "
        (multiply (:num item) 2)
        " TYPE 2"]
    )
  ]
)

(defn items-list [items iteration]
  [:div {:class "items-list"}
    (if (= iteration "FOR")
      [:div "USING FOR LOOP "
        (for [item items]
          [:div {:class "items"}
            (if (= (:type item) "type1")
              [:p
                (:num item) " * 10 = "
                (multiply (:num item) 10)
                " TYPE 1"
              ]
              [:p
                (:num item) " * 20 = "
                (multiply (:num item) 20)
                " TYPE 2"]
            )
          ]
        )
      ]
      [:div {:class "items-list"} "USING MAP "
        (map mapping items)
      ]
    )
  ]
)

(defn header [message]
  [:div {:on-click (fn [event] (swap! app-state assoc-in [:message] "Another New Message"))}
   [:h2 {:class "title"} message]])

(defn buttons [iteration]
  [:div {:class "buttons"} "PREFERRED ITERATION"
    [:button {:on-click (fn [event] (swap! app-state assoc-in [:iteration] "FOR"))} "FOR"]
    [:button {:on-click (fn [event] (swap! app-state assoc-in [:iteration] "MAP"))} "MAP"]
  ]
)

(defn inputs [inputValue]
  [:input 
    {
      :type "text"
      :placeholder "DARTHVADER!"
      :on-change
        (fn [event]
          (swap! app-state assoc-in [:inputValue] "haha")
        )
    }
  ]
)

(defn app []
  [:div {:class "container"}
   [header (:message @app-state)]
   [buttons (:iteration @app-state)]
   [inputs (:inputValue @app-state)]
   [items-list (:items @app-state) (:iteration @app-state)]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))
