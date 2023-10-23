package main

import (
	"strings"

	"golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
	elems := strings.Fields(s)
	myMap := make(map[string]int)

	//fmt.Printf("len: %d, elems: %v\n", len(elems), elems)
	for _, elem := range elems {
		//v, isPresent := myMap[elem]
		//if !isPresent {
		//	fmt.Printf("\"%v\" key is not present. The value is %v\n", elem, v)
		//}
		myMap[elem] += 1
	}
	return myMap
}

func main() {
	wc.Test(WordCount)
}
