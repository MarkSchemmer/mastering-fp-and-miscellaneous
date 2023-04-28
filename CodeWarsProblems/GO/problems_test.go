package main

import "testing"

func TestAdd(t *testing.T){

    got := DoubleInteger(4)
    want := 8

    if got != want {
        t.Errorf("got %q, wanted %q", got, want)
    } else {
		t.Log("correct!!!")
		// t.Log("got %q, wanted %q", got, want)
	}
		
}