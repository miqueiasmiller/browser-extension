setTimeout(() => {
   clockifyButton.render('#fastactionsbar:not(.clockify)', { observe: true }, function (elem) {
      ticketId = $('#ticketdetailsbar > div > table > tbody > tr > td > span:nth-child(2)');
      ticketSubject = $('#ticketsubject');
      ticketType = $('#titledataleft span.Ctype');
      taskName = 'Operations';

      customFields = $$('#ticketcont #tabbeddetails #customfieldstbl tr');
      if (!!customFields) {
         row = [...customFields].filter(r => r.textContent.includes("Task Type"));

         if (!!row && row.length > 0) {
            cols = row[0].querySelectorAll('td');

            if (!!cols && cols.length > 1 && cols[1].innerText)
               taskName = cols[1].innerText.trim();
         }
      }

      link = clockifyButton.createButton({
         description: !!ticketId && !!ticketSubject ? ticketId.innerText + " - " + ticketSubject.innerText : '',
         projectName: !!ticketType ? ticketType.innerText + ' (LANSweeper)' : '',
         taskName: taskName.trim(),
         tagNames: ['Ticket LANSweeper']
      });

      link.style.verticalAlign = 'middle';
      elem.append(link);
   });
}, 100);