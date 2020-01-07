#include <stdio.h> 
#include <graphics.h>
#include <conio.h>
#include <dos.h>

int abs (int n) 
{ 
	return ( (n>0) ? n : ( n * (-1))); 
} 
 
void DDA(int X0, int Y0, int X1, int Y1) 
{ 
	int dx = X1 - X0; 
	int dy = Y1 - Y0; 

	int steps = abs(dx) > abs(dy) ? abs(dx) : abs(dy); 

	float Xinc = dx / (float) steps; 
	float Yinc = dy / (float) steps; 

	float X = X0; 
	float Y = Y0;
	int i;
	for ( i = 0; i <= steps; i++)
	{ 
		putpixel (X,Y,GREEN);
		X += Xinc;		 
		Y += Yinc;	
		delay(50);
	} 
} 
 
void main() 
{ 
	int gd = DETECT, gm; 
	int X0 = 2, Y0 = 2, X1 = 200, Y1 = 200;
	initgraph (&gd, &gm, "C:\\TURBOC3\\BGI"); //change turboc3 to turbo folder name in c drive
	DDA(X0, Y0, X1, Y1);
	getch();
	closegraph();
} 
