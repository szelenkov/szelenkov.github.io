# /usr/bin/python
# -*- coding: utf-8 *-
"""
A cairoSVG based favicon generation module.

Copyright (C) Serhiy Zelenkov.
"""
from os import getcwd
from os.path import join
import subprocess

if __name__ == '__main__':
    with open(join(getcwd(), 'favicon.svg'), 'r', encoding='utf-8') as file:
        for (dev, dims) in {'android-':  (36, 48, 72, 96, 144, 192),
                            'apple-': (57, 60, 72, 76, 114,
                                       120, 144, 152, 180),
                            'fav': (16, 32),
                            'mc-': (144, )}.items():
            for dim in dims:
                subprocess.call(['cairosvg',
                                 '--output-width', str(dim),
                                 '--output-height', str(dim),
                                 '-f', 'png',
                                 '-o', join(getcwd(), 'images',
                                            f'{dev}icon-{dim}x{dim}2.png'),
                                 join(getcwd(), 'favicon.svg')])
