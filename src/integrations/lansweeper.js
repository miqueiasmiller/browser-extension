setTimeout(() => {
   clockifyButton.render('#fastactionsbar:not(.clockify)', { observe: true }, function (elem) {
      ticketId = $('#ticketdetailsbar > div > table > tbody > tr > td > span:nth-child(2)');
      ticketSubject = $('#ticketsubject');
      ticketType = $('#titledataleft span.Ctype');

      link = clockifyButton.createButton({
         description: !!ticketId && !!ticketSubject ? ticketId.innerText + " - " + ticketSubject.innerText : '',
         projectName: !!ticketType ? ticketType.innerText + '[LAN Sweeper]' : '',
         taskName: 'Operations',
         tagNames: ['Ticket LANSweeper']
      });

      link.style.verticalAlign = 'middle';
      elem.append(link);
   });
}, 100);