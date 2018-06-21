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
    titleFormat: 'YYYY年 MMMM',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    selectable: true,
    allDayText: "終日"
  });
}
