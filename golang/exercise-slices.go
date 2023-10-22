package main

import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
	pics := make([][]uint8, dy)
	for i := 0; i < dy; i++ {
		pics[i] = make([]uint8, dx)
	}

	for x := range pics {
		for y := range pics[x] {
			pics[x][y] = uint8(x ^ y)
		}
	}

	return pics
}

func main() {
	pic.Show(Pic)
}
