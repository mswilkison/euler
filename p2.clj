/* By considering the terms in the Fibonacci sequence whose
 * value do not exceed four million, find the sum of the
 * even-valued terms
 */

(defn fib [a b]
  (cons a (lazy-seq (fib b (+ b a)))))

(reduce + 0 (filter even? (take-while (partial > 4000000)
                                      (fib 1 1))))
