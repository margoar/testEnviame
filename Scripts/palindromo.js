const palindromo = () => {

  let cadena = 'afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood';
  let t = cadena.length;
  let palabras = [];

  for (let m = 0; m < t; m++) 
  {
    for (let n = m+1; n<t+1; n++) 
    {
      let palabraFinal = cadena.slice(m,n);
      const strReversed = palabraFinal.split("").reverse().join("");

      if(palabraFinal.length>=3 && strReversed === palabraFinal ){
        palabras.push(cadena.slice(m,n));
      }
      
    }
  }
console.log(palabras);


}

