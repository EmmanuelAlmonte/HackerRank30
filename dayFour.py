from mimetypes import init
import this


class Person:
    def __init__(self,initialAge):
        # Add some more code to run some checks on initialAge
        this.age = initialAge
    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
    def yearPasses(self):
        # Increment the age of the person in here
        

t = int(input())
for i in range(0, t):
    age = int(input())         
    p = Person(age)  
    p.amIOld()
    for j in range(0, 3):
        p.yearPasses()       
    p.amIOld()
    print("")

# This is not complete, solution will be uploaded within 3 days. 

