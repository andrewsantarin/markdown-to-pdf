export const INPUT = [
  '### Problem Overview\nThe blocking of timeslots (delivery and pickup) should be done from the Care app by customer care.\n\n------\n',
  '### Expected Outcome\nThe timeslot manager in the React.js Care app should closely imitate the UX of the existing Django-jQuery timeslot manager.',
  '\n\nAdditional considerations:\n\n- Always restrict using full hour (e.g. 10:00am, 01:00pm, 08:00pm)',
  '\n- Allow restriction of multiple timeslots using one stretchable block',
  '\n- [`react-resizable`](https://strml.github.io/react-resizable/examples/1.html)',
  '\n- [`react-big-calendar`](http://intljusticemission.github.io/react-big-calendar/examples/index.html)\n\n------\n',
  '###Definiton of Done\n1. Customer Care no longer uses the Django implementation at: https://api.flymamawosh.com/api/settings/timeslot_blocker/\n2. The Care app has a timeslot manager screen.'
].join('');
