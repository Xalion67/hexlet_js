 const toRna = dna => {
  let rna = '';
  for (let i = 0; i < dna.length; i++); {
      switch (dna[i]) {
        case 'G': rna += 'C';
          break;
        case 'C': rna += 'G';
          break;
        case 'T': rna += 'A';
          break;
        case 'A': rna += 'U';
          break;
        default: return 'This is string a not dna';
      }
  }
  console.log(rna);
  return rna;
}
