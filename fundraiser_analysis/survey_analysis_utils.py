"""Given a CSV with orders, summarize the numbers of each type of t-shirt and gross money raised."""


from enum import Enum
import pandas as pd


class Size(Enum):
    """Enumeration for t-shirt size."""
    XS = "XS"
    S = "S"
    M = "M"
    L = "L"
    XL = "XL"
    XXL = "XXL"


class SleeveLength(Enum):
    """Enumeration for sleeve length."""
    SHORT = "Short"
    LONG = "Long"