// var rect = {
//     width : 50,
//     height : 80,

//     draw : function ( ){
//         console.log('I am Rectangle')
//         console.log('My Height is ' + this.height)
//         console.log('My Width is ' + this.width)
//     }
// }

// rect.draw()

// rect.height = 150

// rect.draw ()

// var rect = {
//     width : 50,
//     height : 80,

//     draw : function ( ){
//         console.log('I am Rectangle')
//         this.emni()
        
//     },
//     emni : function(){
//         console.log('My Height is ' + this.height)
//         console.log('My Width is ' + this.width)
//     }
// }

// rect.draw()

///**Factory Class */

// var createReact = function (width, height){
//     return  {
//         width : width,
//         height : height,
    
//         draw : function ( ){
//             console.log('I am Rectangle')
//             this.emni()
            
//         },
//         emni : function(){
//             console.log('My Height is ' + this.height)
//             console.log('My Width is ' + this.width)
//         }
//     }
    
    
// }

// var rect1 = createReact(5, 6)
// rect1.draw()

// var rect2 = createReact(10,23)
// rect2.draw()

///**Constructot */

// var Rectangle = function ( width, height){
//      this.width = width
//      this.height = height
    
//         this.draw =  function ( ){
//             console.log('I am Rectangle')
//             this.emni()
            
//         }
//         this.emni = function(){
//             console.log('My Height is ' + this.height)
//             console.log('My Width is ' + this.width)
//         }
// }

// var rect3 = new Rectangle (50, 60)
// rect3.draw()

///**Function are Object it's proof */

// function test(){
//     console.log('I am Function')
// }

// var Rect = new Function ( 'width', 'height',`{
//     this.width = width
//     this.height = height
   
//        this.draw =  function ( ){
//            console.log('I am Rectangle')
//            this.emni()
           
//        }
//        this.emni = function(){
//            console.log('My Height is ' + this.height)
//            console.log('My Width is ' + this.width)
//        }
// }` )

// var rectnew = new Rect( 6, 7)
// rectnew.draw()

//**Call, Apply & Bind */

//  function myFunc (){
//      console.log(this)
//      console.log(this.a + this.b)
//  }

// //  myFunc({})
// //  myFunc.call({})
// myFunc.call({a : 50, b : 60})
// myFunc.apply({a : 50, b : 60})

// function myFunc (c , d){
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }

// myFunc.call({a : 50, b : 60}, 5,6)
// myFunc.apply({a : 50, b : 60},[7,8])

// var mybind = myFunc.bind({ a : 5 , b : 9})
// mybind(7,7)

//**Pass by Value Vs Pass by reference */
//Call br Value vs call by refernce//

//**pass br value or call by value */

//  var n = 10
//  function change(n){
//      n = n + 100
//     console.log(n)
//  }

//  change(n)
//  console.log(n)

//  //**pass by reference */

// var obj = {
//     a : 10,
//     b : 20
// }

// function chang1 (obj){
//     obj.a = obj.a + 100
//     obj.b = obj.b + 200
//     console.log(obj)
// }

// chang1(obj)
// console.log(obj)

//**Abstraction or hide or Private data in Javascript */

// var Rectangle = function ( width, height){
//     this.width = width
//     this.height = height
//     var position = {
//         x : 56,
//         y : 66
//     }
   
       
//         var emni = function(){
//            console.log('My Height is ' + this.height)
//            console.log('My Width is ' + this.width)
//        }.bind(this)
//        this.draw =  function ( ){
//         console.log('I am Rectangle')
//         console.log('My position is X = ' + position.x + ' and Y = ' + position.y)
//         emni()
        
//     }
// }

// var rect3 = new Rectangle (50, 60)
// rect3.draw()


