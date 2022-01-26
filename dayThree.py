#!/bin/python3

import math
import os
import random
import re
import sys

def nOddOrEven(inputNum):
  if(inputNum % 2 != 0):
    print("Weird")
  elif(inputNum % 2 == 0) and (inputNum in range(2, 6)):
    print("Not Weird")
  elif(inputNum % 2 == 0) and (inputNum in range(6, 21)):
    print("Weird")
  else:
    print("Not Weird")
  

if __name__ == '__main__':
    N = int(input().strip())
    nOddOrEven(N)

