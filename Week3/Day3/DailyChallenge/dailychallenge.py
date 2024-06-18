import numpy as np


class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.diameter = 2 * radius

    def area(self):
        return np.pi * (self.radius ** 2 )

    def __repr__(self):
        return f"Circle (radius={self.radius}, diameter={self.diameter})"


    def __add__(self, other: "Circle"):
        new_radius = self.radius + other.radius
        return Circle(new_radius)

    def __gt__(self, other) -> bool:
        return self.radius > other.radius

    def __eq__(self, other) -> bool:
        return self.radius == other.radius


def sort_circles_by_radius(circles):
    circles.sort(key=lambda x: x.radius)

circles = [Circle(5), Circle(2), Circle(7), Circle(3)]


circles.append(Circle(4))
circles.append(Circle(6))

sort_circles_by_radius(circles)
print()
