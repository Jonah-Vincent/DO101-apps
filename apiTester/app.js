fetch('http://do-101-apps-git-testprojekt.apps.us-west-1.starter.openshift-online.com/')
    .then(response => response.json())
    .then(data => console.log(data));