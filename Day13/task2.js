let fi=[3,5,6,7,9];
let mini=[4,6,2,4,55,9];
let len1=fi.length;
let len2=mini.length;
for(let i=0;i<len2-1;i++)
{
    fi[len1++]=mini[i+1];
}
console.log(fi);
