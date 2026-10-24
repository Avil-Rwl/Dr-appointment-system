pipeline {
agent {
label 'mern-agent'
}

```
stages {
    stage('Checkout Verification') {
        steps {
            echo 'Jenkins Agent is running the pipeline!'
            sh 'hostname'
            sh 'whoami'
            sh 'git --version'
        }
    }
}

post {
    success {
        echo 'Pipeline completed successfully!'
    }
    failure {
        echo 'Pipeline failed. Check the console output.'
    }
}
```

}
