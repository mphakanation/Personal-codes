# Import necessary libraries
import autosklearn.classification
import sklearn.model_selection
import sklearn.datasets

# Load a dataset
X, y = sklearn.datasets.load_digits(return_X_y=True)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = sklearn.model_selection.train_test_split(X, y, random_state=42)

# Create an AutoML classifier
automl_classifier = autosklearn.classification.AutoSklearnClassifier(time_left_for_this_task=120, per_run_time_limit=30)

# Fit the AutoML classifier on the training data
automl_classifier.fit(X_train, y_train)

# Make predictions on the test data
y_pred = automl_classifier.predict(X_test)

# Evaluate the model's performance
accuracy = sklearn.metrics.accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
