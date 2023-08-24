1) 
2)The code in the function ececutes when the function is called,not when it is defined.
3)def statement creates a function in python.
4)A function is a named block of a code that perfome a task. A function call is the act of using that function to execute the code
5)A python program has one global scope.Each function call creates a neww local scope.
6)when a function call returns,the local scope is destroyed ,and the variables within it are no longer accessible or valid.
7)Reurn value:Result provided by th efunction after it has bean executed
   part of expression: yes a return value can be part of an expression,the value returned by a function directly in another operation .
   example:def add*(x,y)
               return a+b
            result=add(6,9)
            total=result*2
            print(total)
8)If a function does not have a return statement,the return value of a call to that function is none
9)To force a variable in a function to refer to the global varriable.we can use the global keyword before the variable within the function
    example:
    a=10 
    def update_global():
        global x
        x=15
    update_global()
    print(x)
   10)The data type of none is called none type
   11)The statement does nothing by default and will likely raise an ImportError,
       as areallyourpetsnamederic is not a standard or built-in module.
   12) After importing the spam module,you can call the function bacon() using the syntax span.bacon().
   13) To prevent a program from crashing due to an error use a try and except block to catch and handle the error gracefully
   14) 
         
