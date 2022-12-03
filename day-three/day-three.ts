const splitIntoCompartments = (backpack: string): string[] => [backpack.slice(0, backpack.length / 2), backpack.slice(backpack.length / 2)]

const findCommonItem = (x: string, y: string[]): string | undefined => {
  return x.split(``).find(curr => 
    y.every(str => str.split(``).some(letter => letter === curr))  
  )
}

const isLowerCase = (str: string): boolean => str.toLowerCase() === str

const getScore = (str: string): number => {
  if (isLowerCase(str)) {
    return str.charCodeAt(0) - 96
  }
  return str.toLowerCase().charCodeAt(0) - 70
}

export const dayThreePartOne = (data: string[]): number => 
  data.reduce((sum, x) => {
    const [compartmentOne, compartmentTwo] = splitIntoCompartments(x)
    const commonItem = findCommonItem(compartmentOne, [compartmentTwo])
    return sum += getScore(commonItem)
  }, 0)

export const dayThreePartTwo = (data: string[]): number => {
  const splitElves: string[][] = []
  for (let i = 0; i < data.length; i += 3) {
    splitElves.push(data.slice(i, i + 3))
  }
  return splitElves.reduce((sum, [packOne, packTwo, packThree]) => 
    sum += getScore(findCommonItem(packOne, [packTwo, packThree]))
  , 0)
}