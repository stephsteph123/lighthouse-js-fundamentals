function smartGarbage(trash, bins) {
  const rangeResult = [];
  for (let i = 0; i < 10; i++) {
  if (trash === 'waste') {
    bins.waste = bins.waste + 1;
  } else if (trash === 'recycling') {
    bins.recycling = bins.recycling + 1;
  } else if (trash === 'compost') {
    bins.compost = bins.compost + 1;
  }
  return bins
}
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })
