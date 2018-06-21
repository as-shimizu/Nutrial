function init() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month agendaWeek agendaDay'
    },
    businessHours: {
      dow: [ 1, 2, 3, 4, 5], // Monday - Friday
    },
    firstDay: 1,
    weekends: true,
    height: 1000,
    contentHeight: 600,
    aspectRatio: 1.30,
    defaultView: 'month',
    timeFormat: 'H(:mm)',
    buttonText: {
      prev:     ' < ',
      next:     ' > ',
      prevYear: ' << ',
      nextYear: ' >> ',
      today:    '今日',
      month:    '月',
      week:     '週',
      day:      '日'
    },
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土']
  });
}
