pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Stage 1: Build - Building the code using Maven.'
                echo 'Tool: Maven is used to compile and package the code.'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Unit and Integration Tests - Running unit tests and integration tests.'
                echo 'Tool: JUnit and Selenium can be used for unit and integration tests respectively.'
            }
            post {
                success {
                    emailext subject: 'Unit and Integration Tests Passed',
                              body: 'Unit and integration tests passed successfully.',
                              to: 's223282399@deakin.edu.au',
                              attachmentsPattern: '**/target/surefire-reports/*.txt'
                }
                failure {
                    emailext subject: 'Unit and Integration Tests Failed',
                              body: 'Unit and integration tests failed. Please check the logs.',
                              to: 's223282399@deakin.edu.au',
                              attachmentsPattern: '**/target/surefire-reports/*.txt'
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Stage 3: Code Analysis - Analyzing code using SonarQube.'
                echo 'Tool: SonarQube is used to analyze the code and ensure it meets industry standards.'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Stage 4: Security Scan - Performing security scan using OWASP Dependency-Check.'
                echo 'Tool: OWASP Dependency-Check identifies vulnerabilities in the code.'
            }
            post {
                success {
                    emailext subject: 'Security Scan Passed',
                              body: 'Security scan passed successfully.',
                              to: 's223282399@deakin.edu.au',
                              attachmentsPattern: '**/dependency-check-report.html'
                }
                failure {
                    emailext subject: 'Security Scan Failed',
                              body: 'Security scan failed. Please check the logs.',
                              to: 's223282399@deakin.edu.au',
                              attachmentsPattern: '**/dependency-check-report.html'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Stage 5: Deploy to Staging - Deploying the application to staging server.'
                echo 'Tool: Jenkins SSH plugin or AWS CLI can be used for deployment to AWS EC2 instance.'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Stage 6: Integration Tests on Staging - Running integration tests on staging environment.'
                echo 'Tool: Selenium or Postman can be used for testing in a production-like environment.'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Stage 7: Deploy to Production - Deploying the application to production server.'
                echo 'Tool: Similar to Stage 5, deployment can be done using Jenkins SSH plugin or AWS CLI.'
            }
        }
    }

    post {
        always {
            // Clean up steps if any
        }

        success {
            echo 'Pipeline executed successfully!'
        }

        failure {
            echo 'Pipeline execution failed!'
        }
    }
}
