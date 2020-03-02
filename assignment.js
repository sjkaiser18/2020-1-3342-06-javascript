/*
This assignment is broken into a number of sections. You'll want to get each
section completed before moving on to the next. To make this easier,
I've included all but the first section inside
  if (false) {
    section
    section...
  }
As you complete a section, move the `if` part of this down past the end of the
next section, which will then make it live.
  section
  if (false) {
    section...
  }
Most sections have their own short description of the problem. However, there is
one global rule: you can only change the code in this file that lies between the
markers
  // START
and
  // END
So, in the following code:
  // START
  let a = 3
  let b
  // END
  assert.equal(a+b, 8)
You can change the let statements, but not the assert. (My intent here would be
for you to make the test pass my initializing b to 5.
*/

const assert = require('assert').strict   // ignore these two. they just
Error.stackTraceLimit = 2                 // set up the environment

///////////////// Section 1 ///////////////////////////////////////////
//
// make the assertions pass

let a = 5
// START
let b=10
let c=-11
let d="hawaii"
let e=99
let f=0
// END

assert.equal(a + b, 15)
assert.equal(b + c, -1)
assert.equal(d + a, "hawaii5")
assert.equal(e + d + a, "99hawaii5")
assert.equal(d + a + f, "hawaii50")

// add parentheses to the first parameter to make this pass
// START
assert.equal(d + (b + c), "hawaii-1")
//



///////////////// Section 2 ///////////////////////////////////////////
//
// fix the declation(s) in this code (but continue to use let)

// START
let sum = 0
for (let i = 1; i <= 10; i++) {
  sum+=i
}

// END
assert.equal(sum, 55)



///////////////// Section 3 ///////////////////////////////////////////
//
// fix the `for` line of this code

let result = []
//START
for (let i of [1,2,3,4]) {
// END
  result.push(3*i)
}
assert.deepEqual(result, [3,6,9,12])




///////////////// Section 4 ///////////////////////////////////////////
//
// fix the body of the loop

let populations = {
  houston:     2_099_451,
  san_antonio: 1_327_407,
  dallas:      1_197_816,
  austin:        790_390,
  fort_worth:    741_206,
  rest:       18_989_291,
}

let total = 0
for (let city in  populations) {
  //START
  total += populations[city]
  // END
}
assert.equal(total, 25_145_561)



///////////////// Section 5 ///////////////////////////////////////////
//
// write the body of the following function

let count = 0
function nextLabel(label) {
  // START
      let sendout=label+'-'+count
      count++
      return sendout
  // END
}

assert.equal(nextLabel("entry"), "entry-0")
assert.equal(nextLabel("entry"), "entry-1")
assert.equal(nextLabel("entry"), "entry-2")
assert.equal(nextLabel("exit"),  "exit-3")


///////////////// Section 6 ///////////////////////////////////////////
//
// The problem with `nextLabel` is that it uses a global
// variable for the count, so no matter which label you
// pass in, you'll always increment the same count.
//
// Fix that by writing a function that generates
// a new function for each label to be seauenced

function labelMaker(label) {
  // START
      var ex_val=0
      var en_val=0
      return function nextEntryLabel(label){
        if(label=="entry"){
          let select=(`${label}-${en_val}`)
          en_val++
          return select
        }
        if(label=="exit"){
          let select=(`${label}-${ex_val}`)
          ex_val++
          return select
        }
      }
  // END
}

let nextEntryLabel = labelMaker("entry") 
let nextExitLabel  = labelMaker("exit")


assert.equal(nextEntryLabel(), "entry-0")
assert.equal(nextEntryLabel(), "entry-1")
assert.equal(nextExitLabel(),  "exit-0")
assert.equal(nextEntryLabel(), "entry-2")
assert.equal(nextExitLabel(),  "exit-1")


///////////////// Section 7 ///////////////////////////////////////////
//
// The client likes your labelMaker function,
// but wants to be able to change the next
// number in the sequence by optionally
// passing a parameter to the functions it generates
//
// Although you might suggest changing this to an OO
// implementation, your client is mean and spiteful and
// wants you to do it using only functions.
//
// However, the client is not totally psychotic. They tell you
// that if you write a function that receives a parameter, but
// they don't pass it when you call that function, the parameter
//  will have the value `undefined`

function labelMaker1(label) {
  // START
  var ex_val=0
  var en_val=0
      return function nextEntryLabel1(pass){
        if(pass==undefined){
            let new_pass=0
        } 
        else{
          let new_pass=pass
        }
          if(label=="entry"){
            let select=(`${label}-${en_val+new_pass}`)
            en_val++
            return select
          }
          if(label=="exit"){
            let select=(`${label}-${ex_val+new_pass}`)
            ex_val++
            return select
          }
        }
      
  // END
}

let nextEntryLabel1 = labelMaker1("entry")
let nextExitLabel1  = labelMaker1("exit")

assert.equal(nextEntryLabel1(),   "entry-0")
assert.equal(nextEntryLabel1(),   "entry-1")
assert.equal(nextEntryLabel1(99), "entry-99")
assert.equal(nextExitLabel1(200), "exit-200")
assert.equal(nextEntryLabel1(),   "entry-100")
assert.equal(nextExitLabel1(),    "exit-201")
assert.equal(nextExitLabel1(0),   "exit-0")
assert.equal(nextExitLabel1(),    "exit-1")

if (false) { // move me down to the next section when the one above is complete
}           // end of `if (false)`