export default function levelForOutcome(outcome) {
  if (outcome === 'passed') {
    return 'success';
  } else if (outcome === 'xfailed' || outcome === 'skipped') {
    return 'warning';
  } else {
    return 'danger';
  }
}
