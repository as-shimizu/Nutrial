function init() {
  var ymd;
  $('#calendar').fullCalendar({
    header: {
      left: '',
      center: 'prev title next',
      right:'month agendaDay'
    },
//    titleFormat: 'MMMM YYYY',
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
      today:    '今日',
      month:    '月',
      week:     '週',
      day:      '日'
    },
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    selectable: true,
    allDayText: "終日",
    views: {
      month: {
        titleFormat: "YYYY年 MMMM",
      },
      day: {
        titleFormat: "YYYY年 MMMM D日 [(]ddd[)] "
      },
    }
  });

  //customeis
  var switchMonth = document.createElement("input");
  var switchDay = document.createElement("input");
  switchMonth.type = "radio";
  switchDay.type = "radio";
  switchMonth.name = "switchMonthDay";
  switchDay.name = "switchMonthDay";
  switchMonth.id = "switchMonth";
  switchDay.id = "switchDay";
  switchMonth.value = "month";
  switchDay.value = "day";
  switchMonth.setAttribute("checked","");

  var labelMonth = document.createElement("label");
  var labelDay = document.createElement("label");
  labelMonth.setAttribute("for","switchMonth");
  labelDay.setAttribute("for","switchDay");
  labelMonth.innerText = "月";
  labelDay.innerText = "日";
  labelMonth.setAttribute("class","sMonth");
  labelDay.setAttribute("class", "sDay");

  var fcRight = document.getElementsByClassName("fc-right");
  [].forEach.call(fcRight,function(x) {
    x.appendChild(switchMonth, null);
  });
  [].forEach.call(fcRight,function(x) {
    x.appendChild(labelMonth, null);
  });
  [].forEach.call(fcRight,function(x) {
    x.appendChild(switchDay, null);
  });
  [].forEach.call(fcRight,function(x) {
    x.appendChild(labelDay, null);
  });

  //月・日の切り替え処理
  $('input[name="switchMonthDay"]:radio').change( function() {
    var radioVal = $(this).val();
    var dailyView = document.getElementById('dailyView');
    var date = document.getElementsByClassName('fc-day-header','fc-widget-header');
    [].forEach.call(date,function(x) {
      console.log(x.dataset.value);
    });
    if(radioVal == 'month') {
      var buttonMonth = document.getElementsByClassName('fc-month-button');
      [].forEach.call(buttonMonth,function(x) {
        x.click();
      });
      dailyView.style.display = "none";
    } else if(radioVal == 'day') {
      var buttonDay = document.getElementsByClassName('fc-agendaDay-button');
      [].forEach.call(buttonDay,function(x) {
        x.click();
      });
      dailyView.style.display = "block";

    }
  })
}
