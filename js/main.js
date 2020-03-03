//KINTAMUJU INICIJAVIMAS
//1.
const a = 1;
console.log(a);
const b = 2;
console.log(b);
const c = 3;
console.log(c);
//2.
const vardas = "Migle";
console.log(vardas);
const zodis = "suo";
console.log(zodis);
const maistas = "riesutai";
console.log(maistas);
//3.
const d = [1,2,3,4,5];
console.log(d);
const e = [10,20,30,40,50];
console.log(e);
const f = [15,16,17,18,19,20];
console.log(f);
//4.
g = ["vienas", "du", "trys", "keturi", "penki"];
console.log(g);
h = ["labas", "ate", "labas", "ate", "labas"];
console.log(h);
j = ["avis", "arklys", "pele", "kate", "suo"];
console.log(j);

//VEIKSMAI SU KINTAMAISIAIS
//1.
const suma = a + b + c;
console.log(suma);
//2.
const sujungti = vardas + ' ' + zodis + ' ' + maistas;
console.log(sujungti);
//3.
const verte = d[0] - d[1] + d[2] - d[3] + d[4];
console.log(verte);
const verte2 = e[0] - e[1] + e[2] - e[3] + e[4];
console.log(verte2);
const verte3 = f[0] - f[1] + f[2] - f[3] + f[4];
console.log(verte3);
//4.
const verte4 = g[4] + ', ' + g[3] + ', ' + g[2] + ', ' + g[1] + ', ' + g[0] + '.';
console.log(verte4);
const verte5 = h[4] + ', ' + h[3] + ', ' + h[2] + ', ' + h[1] + ', ' + h[0] + '.';
console.log(verte5);
const verte6 = j[4] + ', ' + j[3] + ', ' + j[2] + ', ' + j[1] + ', ' + j[0] + '.';
console.log(verte6);
//KINTAMUJU PLAYGINIMAS
//1.a
if(a>b && a>c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(b>c && b>a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(c>a && c>b){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}

//1.b
if(a<b && a<c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(b<a && b<c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(c<b && c<a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
//1.c
if(a===b && b===c && c===a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
//1.d
if(a !== b && b!==c && c!== a ){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
//1.e
if(a >= b){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(a>=c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(b<=c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(b >= a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(c >= b){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(c >= a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
//1.f
if(a<=b){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(a<=c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(b<=a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(b<=c){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(c<=b){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
if(c<=a){
    console.log("Pomidoras");
}else{
    console.log("Bandykite kita karta");
}
//2.

// const vardas = "Migle";
// const zodis = "suo";
// const maistas = "riesutai";
const vardas_ilgis = vardas.length;
console.log(vardas_ilgis);
const zodis_ilgis = zodis.length;
console.log(zodis_ilgis);
const maistas_ilgis = maistas.length;
console.log(maistas_ilgis);
//3.a.

if(vardas_ilgis > zodis_ilgis){
    console.log(vardas);
}else{
    console.log(zodis); 
}
if(vardas_ilgis > maistas_ilgis){
    console.log(vardas);
}else{
    console.log(maistas); 
}
if(maistas_ilgis > zodis_ilgis){
    console.log(maistas);
}else{
    console.log(zodis); 
}
if(maistas_ilgis > vardas_ilgis){
    console.log(maistas);
}else{
    console.log(vardas); 
}
if(zodis_ilgis > maistas_ilgis){
    console.log(zodis);
}else{
    console.log(maistas); 
}
if(zodis_ilgis > vardas_ilgis){
    console.log(zodis);
}else{
    console.log(vardas); 
}
//3.b
if(vardas_ilgis < zodis_ilgis){
    console.log(vardas);
}else{
    console.log(zodis); 
}
if(vardas_ilgis > maistas_ilgis){
    console.log(vardas);
}else{
    console.log(zodis); 
}
//3.c ir 3.d
if(vardas_ilgis === zodis_ilgis === maistas_ilgis){
    console.log("Jie lygus")
}else{
    console.log("Jie nelygus");
}
//3.e ir f
if(vardas_ilgis >= zodis_ilgis && vardas_ilgis >= maistas_ilgis){
    console.log(true);
}else{
    console.log(false);
}
if(zodis_ilgis <= vardas_ilgis && zodis_ilgis <= maistas_ilgis){
    console.log(true);
}else{
    console.log(false);
}
//4.
// const d = [1,2,3,4,5];
// console.log(d);
// const e = [10,20,30,40,50];
// console.log(e);
// const f = [15,16,17,18,19,20];
// console.log(f);

let d_ilgis = d.length;
console.log(d_ilgis);

let e_ilgis = e.length;
console.log(e_ilgis);
//CIKLO FOR PANAUDOJIMAS
//1.

















