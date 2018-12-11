# -*- coding: utf-8 -*-

import matplotlib.pyplot as plt
import numpy as np
import math

t = np.linspace(-1, 1,66)
# y = -(5*np.sin(2*math.pi*1*t))
y = 3*math.pi*np.exp(-(5*np.sin(2*math.pi*1*t))) 
plt.plot(t, y)
plt.show()

