use std::collections::HashMap;
use std::ops::Sub;
use std::option::Option;
// Two sum leetcode 1. 

// findKey 
fn find_key<'a>(map: &'a HashMap<i32, i32>, value: &i32) -> Option<&'a i32> {
    return map.iter() .find_map(|(key, val)| if val == value { Some(key) } else { None })
}

// going to need to make 
fn Subtract<T:Sub<Output = T> + Copy> (num1: T, num2: T) -> T {
    return num1 - num2;
}

fn two_sum (nums: Vec<i32>, target: i32) -> Vec<i32> {
    let empty_set = Vec::new();
    let mut seen:HashMap<i32, i32> = HashMap::new();
   
    for (i, ele) in nums.into_iter().enumerate() {
        let n = ele;
        let k = Subtract(target, n);

        let value = find_key(&seen, &k);

        if value != None {
            let endNumb:i32 = *value.unwrap() as i32;

            return vec![i as i32, endNumb];
        }

        // insert key value in seen map
        seen.insert(n, i as i32);
    }

    return empty_set;
}

fn main() {
    println!("Hello, world!");
    let ar: Vec<i32> = Vec::new();
    let t: i32 = 9;
    two_sum(ar, t);
}
