// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    
    mutate() {
      for (i = 0; i < dna.length; i++) {
        let newBase = returnRandBase();
        while (newBase === this.dna[i]) {
          newBase = returnRandBase();
        }
        this.dna[i] = newBase;
      }
    },

    compareDna(otherSpec) {
      let match = 0;

      for(i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherSpec.dna[i]) {
          match++;
        }
      }
      
      matchPercent = ((match / 15) * 100).toFixed(2);


      console.log(`Specimen #1 and specimen #2 have ${matchPercent}% DNA in common`);
    },

    willLikelySurvive() {
      const essentialDna = this.dna.filter(e => e === 'C' || e === 'G')

      console.log(`Specimen #${this.specimenNum}'s DNA is ${((essentialDna.length / this.dna.length) * 100).toFixed(2)}% C and G bases`);

      return `This specimen will likely survive: ${essentialDna.length / this.dna.length >= 0.6}`;
    },

    /* Testing
    complementaryStrand() {
      let compStrand = [];

      for(i = 0; i < this.dna.length; i++){
        switch (i) {
          case 'A':
            compStrand.push('T')
          case 'T':
            compStrand.push('A')
          case 'C':
            compStrand.push('G')
          case 'G':
            compStrand.push('C')
          default:
            console.log('Invalid base')
        }
      }
    }*/
  }
}

/*const specimenBatch =[];
const survivingSpecimen = [];
let specimanNum = 1;

while (specimenBatch.length < 30) {
  let newSpec = (pAequorFactory(specimanNum, mockUpStrand()))
  specimenBatch.push(newSpec);
    if (newSpec.willLikelySurvive() === `This specimen will likely survive: ${true}`) {
      survivingSpecimen.push(newSpec);
    }
  specimanNum++
}*/

const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());

//pAequor1.mutate();

console.log(pAequor1.dna);
//console.log(pAequor2.dna);

//pAequor1.compareDna(pAequor2);

//console.log(pAequor1.willLikelySurvive());

//console.log(specimenBatch);
//console.log(survivingSpecimen);

console.log(pAequor1.
  complementaryStrand());