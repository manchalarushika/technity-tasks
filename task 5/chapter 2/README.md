1)True and False are the two Boolean data types.
  They can be return as 'True' and 'False'
2)The 3 Boolean operaters are 'and','or' and 'not'
3)->'and' Operator
   'False'   'False'--'False'
    'False'    'True'--'False'
    'True'     'False'--'False'
    'True'     'True'--'True'
  -> 'or' Oprator
   'False'   'False'--'False'
    'False'    'True'--'True'
    'True'     'False'--'True'
    'True'     'True'--'True'
  ->'not' Operator
   'False'   'True'
   'True'    'False'
 4)(5 > 4) and (3 == 5) evaluate to 'False'
  not (5 > 4) evaluate to 'False'
  (5 > 4) or (3 == 5) evaluate to 'True'
  not ((5 > 4) or (3 == 5)) evaluate to 'False'
  (True and True) and (True == False) evaluate to 'False'
  (not False) or (not True)  evaluate to 'True'
 5)The Six comparison Oprators are 
    '==','!=','>','<','>=','<='
6) '==' is used for comparing values and the '=' is used to assign a value to a variable.
7)A condition is a test or comparison that evaluates to either 'True' or 'False'. It's used to make decisions in our code, controlling the flow based on whether specific conditions are met.conditions are commonly used in
  'if' atatements,loops,and functions to determine what actions to take.They allow your code to adapt and reespond to different situations.
8)-->Outer Block:
              spam = 0
              if spam == 10:
                  print('eggs')
                  if spam > 5:
                      print('bacon')
                  else:
                      print('ham')
                  print('spam')
  --> Inneer Block 1:
    print('eggs')
    if spam > 5:
        print('bacon')
    else:
        print('ham')
    print('spam')
  -->Inner Block 2:
              print('bacon')
9)spam = 2
  if spam == 1:
      print('Hello')
  elif spam == 2:
      print('Howdy')
  else:
      print('Greetings!')
 10)Ctrl+C keys can be pressed if our program is struck in an infinite loop     
 11)Break: 
        it is used to exit the current loop entirely,regardless of the loop condition.it terminates the loops excution immediately.
   continue:
         it is used to skip the rest of the current iteration and move to the iteration of the loop.
 12)range(10): counts from 0 to 9 by 1(default start and step)
    range(0,10):counts from 0 to 9 explicitly starting the start.
    range(0,10,1):counts from 0 to 9 with step explicitly specified( by default,step is 1)
 13)-->using for loop:
    for num in range(1,11):
        print(num)
   -->using while loop:
    num=1
    while num<=10:
        print(num)
        num+=1
 14)After importing the module named spam,u can call the function named bacon() using the  syntax:span.bacon().        
    
        

    
