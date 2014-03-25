; Find the sum of all the multiples of 3 or 5 below 1000.

(reduce + (filter #(or (= 0 (mod % 5)) (= 0 (mod % 3))) (range 1000)))
