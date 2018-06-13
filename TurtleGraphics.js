
class Turtle 
{
    constructor(x,y) 
    {
        this.x = x;
        this.y = y;
        this.steps = [[x,y]];
        this.facing = 1;  
    } 
    forward(nSteps)
    {
        for(let i = 0; i < nSteps; i += 1)
        {
            this.position();
        }
        return this;
    }
    position() 
    {
        switch(this.facing)
        {
            case 0 :
            this.steps.push([this.x,this.y]);
            this.y --;
            break;
            case 1 :
            this.steps.push([this.x,this.y]);
            this.x ++;
            break;
            case 2 :
            this.steps.push([this.x,this.y]);
            this.y ++;
            break;
            case 3 :
            this.steps.push([this.x,this.y]);
            this.x --;
            break;
        }
    }
    right()
    {
        this.facing = (this.facing + 1) % 4;
        return this;    
    }
    left()
    {
        this.facing = (this.facing + 3) % 4;
        return this;   
    }
    allPoints()
    {
        return this.steps;    
    }
    print()
    {
        for (let i = this.startX(); i <= this.endX() + 1; i++) 
        {
            let res = '';
            for (let j = this.startY(); j <= this.endY() + 1; j++) 
            {
                if (this.isSteps(j, i)) 
                {
                    res += "●";
                }
                else 
                {
                    res += " ";
                }
            }
            console.log(res);
        }
    }
    startX() 
    {
        let start = 0;
        for (let i = 0; i < this.steps.length; i++) 
        {
            if (this.steps[i][0] < start) 
            {
                start = this.steps[i][0];
            }
        }
        return start;
    }
    startY() 
    {
        let start = 0;
        for (let i = 0; i < this.steps.length; i++) 
        {
            if (this.steps[i][1] < start) 
            {
                start = this.steps[i][1];
            }
        }
        return start;
    }
    endX() 
    {
        let end = this.steps[0][0];
        for (let i = 1; i < this.steps.length; i++) 
        {
            if (this.steps[i][0] > end) 
            {
                end = this.steps[i][0];
            }
        }
        return end;
    }
    endY() 
    {
        let end = this.steps[0][1];
        for (let i = 1; i < this.steps.length; i++) 
        {
            if (this.steps[i][1] > end) 
            {
                end = this.steps[i][1];
            }
        }
        return end;
    }
    isSteps(x, y) 
    {
        for (let i = 0; i < this.steps.length; i++) 
        {
            if (this.steps[i][0] == x && this.steps[i][1] == y) 
            {
                return true;
            }
        }
        return false;
    }       
}

console.log(new Turtle(0,0)
.forward(5)
.right()
.forward(5)
.right()
.forward(5)
.right()
.forward(5)
.print());


    

