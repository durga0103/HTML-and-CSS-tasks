function fun(a,b)
{
    let aa=b*b;
    let fi=a/aa;
    return  Math.round(fi);
}
var a=65;
var b=1.8;
var dd=fun(a,b);
if(dd>24.9)
{
    console.log("overload");
}
else if(dd>18 && 24.8<dd)
{
    console.log("Normal");
}
else
{
    console.log("Underweight");
}