// ➡️ Instance property → প্রতিবার object তৈরি হলে new memory allocate হয়।
// ➡️ Static property → class-level এ থাকে, memory একটাই হয়, সব objects একেই ব্যবহার করে।


class Counter {
    static count : number  = 0;

    static Increment(){
     return (Counter.count =Counter.count + 1)
    }
    static Decrement(){
        return (Counter.count =Counter.count - 1)
    }
}

// const instance1 = new Counter()

// console.log(instance1.Increment())
// console.log(instance1.Increment())
// console.log(instance1.Increment())
// console.log(instance1.Increment())

// const instance2 = new Counter()
// console.log(instance2.Increment())
// console.log(instance2.Decrement())
// console.log(instance2.Increment())

console.log(Counter.Increment())
console.log(Counter.Increment())
console.log(Counter.Increment())
