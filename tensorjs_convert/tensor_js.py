from keras.models import load_model
import argparse
import tensorflowjs as tfjs

ap = argparse.ArgumentParser()
ap.add_argument("-m", "--model", required=True, help="path to input dataset")
ap.add_argument("-s", "--save", required=True, help="model output path")
args = vars(ap.parse_args())

model_path = args['model']
save_path = args['save']

model = load_model(model_path)
tfjs.converters.save_keras_model(model, save_path)