

function rat_in_maz(maze,pos=[0,0],path=[[...pos]],transverse=[]) {
    const [x,y] = pos;
    if(maze[x][y] ===2 ) {
        return path;
    }
    // 记录走过当前位置
    transverse[x*maze.length+y] = 1
    // 找到可能的选择
    const choices = [[x+1,y],[x-1,y],[x,y+1],[x,y-1]].filter(([x,y]) => {
        return x >= 0 && y>=0 && x<maze.length && y<maze[0].length && ()
    })
}