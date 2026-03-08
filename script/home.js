const filterAllBtn = document.getElementById('btnAll');
const filterOpenBtn = document.getElementById('btnOpen');
const filterClosedBtn = document.getElementById('btnClosed');

// Global variables to store counts
let totalIssuesCount = 0;
let openIssuesCount = 0;
let closedIssuesCount = 0;

//Fetch the Api data
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(response => response.json())
    .then(data => console.log(data))

// Show all data in the all-section
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(response => response.json())
    .then(data => {
        // Calculate counts
        totalIssuesCount = data.data.length;
        openIssuesCount = data.data.filter(issue => issue.status === 'open').length;
        closedIssuesCount = data.data.filter(issue => issue.status === 'closed').length;
        
        // Update all issues count
        document.getElementById('allIssueCount').textContent = `${totalIssuesCount} Issues`;
       
        const issuesList = document.getElementById('issuesList');
        data.data.forEach(issue => {
          
            const issueElement = document.createElement('div');
            
            //console.log('Issue state:', issue.state, 'Issue status:', issue.status); // Debug
            
        
            let statusIcon = '';
            let borderColor = '';
           
            
            if (issue.status === 'open') {
                statusIcon = 'assets/Open-Status.png';
                borderColor = 'border-t-green-500';
            }
            else if (issue.status === 'closed') {
                statusIcon = 'assets/Closed- Status .png';
                borderColor = 'border-t-purple-500';
            }
            else {
                statusIcon = 'assets/Aperture.png';
                borderColor = 'border-t-gray-500';
            }
            
            // Priority color with if-else
            let priorityBadge = '';
            if (issue.priority === 'high') {
                priorityBadge = '<span class="px-2 py-1 text-xs font-semibold text-red-700 bg-red-50 rounded">HIGH</span>';
            }
            else if (issue.priority === 'medium') {
                priorityBadge = '<span class="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-50 rounded">MEDIUM</span>';
            }
            else if (issue.priority === 'low') {
                priorityBadge = '<span class="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded">LOW</span>';
            }
            
            // Format labels with if-else
            let labelsHtml = '';
            if (issue.labels && issue.labels.length > 0) {
                issue.labels.forEach(label => {
                    let icon = '';
                    let bgColor = '';
                    let textColor = '';
                    const labelName = label.toLowerCase();
                    const labelText = label.toUpperCase();
                    
                    if (labelName === 'bug') {
                        icon = '🪲';
                        bgColor = 'bg-red-50';
                        textColor = 'text-red-600';
                    }
                    else if (labelName === 'help wanted') {
                        icon = '⭕';
                        bgColor = 'bg-yellow-50';
                        textColor = 'text-yellow-600';
                    }
                    else if (labelName === 'enhancement') {
                        icon = '✨';
                        bgColor = 'bg-green-50';
                        textColor = 'text-green-600';
                    }
                    else if (labelName === 'good first issue') {
                        icon = '🖊️';
                        bgColor = 'bg-orange-50';
                        textColor = 'text-orange-600';
                    }
                    else {
                        icon = '🏷️';
                        bgColor = 'bg-gray-50';
                        textColor = 'text-gray-600';
                    }
                    
                    labelsHtml += `<span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold ${textColor} ${bgColor} rounded-full">
                        <span>${icon}</span>${labelText}
                    </span>`;
                  
                });
            }
            
            // Format author and date
            const author = issue.author || 'unknown';
            const issueNumber = issue.id;
            const date = new Date(issue.createdAt).toLocaleDateString();
            
            // Build card
            
            issueElement.classList.add('bg-white', 'rounded-lg', 'border', 'border-gray-200', 'border-t-4', borderColor, 'p-4', 'shadow-sm');
            issueElement.innerHTML =  `
            
                <div class="flex items-start justify-between mb-3">
                    <img src="${statusIcon}" alt="Status" class="w-6 h-6" />
                    ${priorityBadge}
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-2">${issue.title}</h3>
                <p class="text-sm text-gray-600 mb-3 leading-relaxed">${issue.description || 'No description'}</p>
                <div class="flex flex-wrap gap-2 mb-3">${labelsHtml}</div>
                <div class="text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <p class="mb-0.5">#${issueNumber} by ${author}</p>
                    <p>${date}</p>
                </div>
            `;
            issuesList.appendChild(issueElement);
        });
    })


 // Show open data in the open-section
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(response => response.json())
    .then(data => {
        const openCount = data.data.filter(issue => issue.status === 'open').length;
        
        // Update open issues count
        document.getElementById('openIssueCount').textContent = `${openCount} Issues`;
       
        const openissuesList = document.getElementById('openIssuesList');
        data.data.forEach(issue => {
            let open_issue = issue.status;
            if (open_issue === 'open') 
            { const issueElement = document.createElement('div');
            
            //console.log('Issue state:', issue.state, 'Issue status:', issue.status); // Debug
            
         
            let statusIcon = '';
            let borderColor = '';
           
            
            if (issue.status === 'open') {
                statusIcon = 'assets/Open-Status.png';
                borderColor = 'border-t-green-500';
            }
            else if (issue.status === 'closed') {
                statusIcon = 'assets/Closed- Status .png';
                borderColor = 'border-t-purple-500';
            }
            else {
                statusIcon = 'assets/Aperture.png';
                borderColor = 'border-t-gray-500';
            }
         
            // Priority color with if-else
            let priorityBadge = '';
            if (issue.priority === 'high') {
                priorityBadge = '<span class="px-2 py-1 text-xs font-semibold text-red-700 bg-red-50 rounded">HIGH</span>';
            }
            else if (issue.priority === 'medium') {
                priorityBadge = '<span class="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-50 rounded">MEDIUM</span>';
            }
            else if (issue.priority === 'low') {
                priorityBadge = '<span class="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded">LOW</span>';
            }
            
            // Format labels with if-else
            let labelsHtml = '';
            if (issue.labels && issue.labels.length > 0) {
                issue.labels.forEach(label => {
                    let icon = '';
                    let bgColor = '';
                    let textColor = '';
                    const labelName = label.toLowerCase();
                    const labelText = label.toUpperCase();
                    
                    if (labelName === 'bug') {
                        icon = '🪲';
                        bgColor = 'bg-red-50';
                        textColor = 'text-red-600';
                    }
                    else if (labelName === 'help wanted') {
                        icon = '⭕';
                        bgColor = 'bg-yellow-50';
                        textColor = 'text-yellow-600';
                    }
                    else if (labelName === 'enhancement') {
                        icon = '✨';
                        bgColor = 'bg-green-50';
                        textColor = 'text-green-600';
                    }
                    else if (labelName === 'good first issue') {
                        icon = '🖊️';
                        bgColor = 'bg-orange-50';
                        textColor = 'text-orange-600';
                    }
                    else {
                        icon = '🏷️';
                        bgColor = 'bg-gray-50';
                        textColor = 'text-gray-600';
                    }
                    
                    labelsHtml += `<span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold ${textColor} ${bgColor} rounded-full">
                        <span>${icon}</span>${labelText}
                    </span>`;
                });
            }
            
            // Format author and date
            const author = issue.author || 'unknown';
            const issueNumber = issue.id;
            const date = new Date(issue.createdAt).toLocaleDateString();
            
            // Build card
            issueElement.classList.add('bg-white', 'rounded-lg', 'border', 'border-gray-200', 'border-t-4', borderColor, 'p-4', 'shadow-sm');
            issueElement.innerHTML = `
                <div class="flex items-start justify-between mb-3">
                    <img src="${statusIcon}" alt="Status" class="w-6 h-6" />
                    ${priorityBadge}
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-2">${issue.title}</h3>
                <p class="text-sm text-gray-600 mb-3 leading-relaxed">${issue.description || 'No description'}</p>
                <div class="flex flex-wrap gap-2 mb-3">${labelsHtml}</div>
                <div class="text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <p class="mb-0.5">#${issueNumber} by ${author}</p>
                    <p>${date}</p>
                </div>
            `;
            openIssuesList.appendChild(issueElement);
            }
        });
    })


    
   




// Button click function
function setActiveButton(id) {

    if (id === 'btnAll') {
        // Set All to primary (blue)
        filterAllBtn.classList.remove('btn-outline');
        filterAllBtn.classList.add('btn-primary');
        // Set others to outline
        filterOpenBtn.classList.remove('btn-primary');
        filterOpenBtn.classList.add('btn-outline');
        filterClosedBtn.classList.remove('btn-primary');
        filterClosedBtn.classList.add('btn-outline');
        // Show all sections
        document.getElementById('all-section').style.display = 'block';
        document.getElementById('open-section').style.display = 'none';
        document.getElementById('close-section').style.display = 'none';
    }
    else if (id === 'btnOpen') {
        // Set Open to primary (blue)
        filterOpenBtn.classList.remove('btn-outline');
        filterOpenBtn.classList.add('btn-primary');
        // Set others to outline
        filterAllBtn.classList.remove('btn-primary');
        filterAllBtn.classList.add('btn-outline');
        filterClosedBtn.classList.remove('btn-primary');
        filterClosedBtn.classList.add('btn-outline');
        // Show open section       
        document.getElementById('all-section').style.display = 'none';
        document.getElementById('open-section').style.display = 'block';
        document.getElementById('close-section').style.display = 'none';

    }
    else if (id === 'btnClosed') {
        // Set Closed to primary (blue)
        filterClosedBtn.classList.remove('btn-outline');
        filterClosedBtn.classList.add('btn-primary');
        // Set others to outline
        filterAllBtn.classList.remove('btn-primary');
        filterAllBtn.classList.add('btn-outline');
        filterOpenBtn.classList.remove('btn-primary');
        filterOpenBtn.classList.add('btn-outline');
        // Show closed section
        document.getElementById('all-section').style.display = 'none';
        document.getElementById('open-section').style.display = 'none';
        document.getElementById('close-section').style.display = 'block';
    }
}