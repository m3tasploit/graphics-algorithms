#include <stdio.h>
#include <dos.h>
#include <graphics.h>
#include <conio.h>

void drawCircle(int xc, int yc, int x, int y) 
{ 
    putpixel(xc+x, yc+y, RED); 
    putpixel(xc-x, yc+y, RED); 
    putpixel(xc+x, yc-y, RED); 
    putpixel(xc-x, yc-y, RED); 
    if(x!=y){
    putpixel(xc+y, yc+x, RED); 
    putpixel(xc-y, yc+x, RED); 
    putpixel(xc+y, yc-x, RED); 
    putpixel(xc-y, yc-x, RED); 
    }
}

void midpointCircle(int xc, int yc, int r){
    int x=0,y=r;
    int p = 1-r;
	putpixel(xc,yc,RED);
    drawCircle(xc,yc,x,y);

    while(x<y){
        x++;
        if (p < 0) {
            p = p + 2 * x + 1;
        }else {
            y--;
            p = p + 2 * x + 1 - 2 * y;
        }
        drawCircle(xc,yc,x,y);
        delay(50);
    }
}

void main() 
{ 
    int xc = 50, yc = 50, r = 30; 
    int gd = DETECT, gm; 
    initgraph(&gd, &gm, "C:\\TURBOC3\\BGI"); //change this to turboc path 
    midpointCircle(xc, yc, r);    
    getch();
    closegraph();
} 
