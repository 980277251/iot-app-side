import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import math 


fig, ax = plt.subplots()
xdata, ydata = [], []
ln, = ax.plot([], [], 'r-', animated=False)

def init():
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1500)
    return ln,

def update(frame):
    xdata.append(frame)
    ydata.append(3*math.pi*np.exp(-(5*np.sin(2*math.pi*1*frame))) )
    ln.set_data(xdata, ydata)
    return ln,

ani = FuncAnimation(fig, update, frames=np.linspace(-1, 1,66),
                    init_func=init, blit=True)
plt.show()
 