---
title: Portfolio 4 IA 
date: 2023-12-17 15:00:00 -0400
categories: [studies,ai,portfolio6]
tags: [ai,studies]
---


# **Contributions**

# It's a Airplane or a Helicopter ?
## About the Project:

*  The main objetive of it is to create a model of machine learning capable of recognize one tipe of vehicle, the airplane. To do this is necessary to use some techniques of deep learning with fastai. Although the model could be use with most of the images in the internet, I chose to use the images of a Helicopter because it's more similar with a airplane.

* The images were got from duckduckgo, "airplane images" and "helicopter images" more further ahead in the project are some tests to see if the image is coherent with the search.

* The project is dive in cells os code and some text between to explain what is happening in the code.


*   It's made in jupyter and google Colab

# Cells 1, 2 and 3.
Are to get the fastai lib and the results of duckduckgo search


```python
!pip install -Uqq fastai
```


```python
!pip install -Uqq duckduckgo_search
```

    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m75.7/75.7 kB[0m [31m3.7 MB/s[0m eta [36m0:00:00[0m
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m76.0/76.0 kB[0m [31m7.8 MB/s[0m eta [36m0:00:00[0m
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m57.5/57.5 kB[0m [31m6.0 MB/s[0m eta [36m0:00:00[0m
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m3.0/3.0 MB[0m [31m44.8 MB/s[0m eta [36m0:00:00[0m
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m58.3/58.3 kB[0m [31m6.6 MB/s[0m eta [36m0:00:00[0m
    [?25h


```python
from duckduckgo_search import ddg_images
from fastcore.all import *

def search_images(term, max_images=300):
    print(f"Searching for '{term}'")
    return L(ddg_images(term, max_results=max_images)).itemgot('image')
```

# Cell 4 and 5
This one is to get one example of the item we want to search, using some functions of fastai and other function from fastdownload to help with the uploading images.

Both of the cells shows the result of the search in duckduckgo and download the images as airplane.jpg or helicopter.jpg from the respective search.


```python
from fastai.vision.all import *
from fastdownload import download_url

urls = search_images('airplane images', max_images=1)
urls[0]

dest = 'airplane.jpg'
download_url(urls[0], dest, show_progress=True)

im = Image.open(dest)
im.to_thumb(256,256)
```

    Searching for 'airplane images'



<style>
    /* Turns off some styling */
    progress {
        /* gets rid of default border in Firefox and Opera. */
        border: none;
        /* Needs to be in here for Safari polyfill so background images work as expected. */
        background-size: auto;
    }
    progress:not([value]), progress:not([value])::-webkit-progress-bar {
        background: repeating-linear-gradient(45deg, #7e7e7e, #7e7e7e 10px, #5c5c5c 10px, #5c5c5c 20px);
    }
    .progress-bar-interrupted, .progress-bar-interrupted::-webkit-progress-bar {
        background: #F44336;
    }
</style>





<div>
  <progress value='1638400' class='' max='1634258' style='width:300px; height:20px; vertical-align: middle;'></progress>
  100.25% [1638400/1634258 00:00&lt;00:00]
</div>






    
![Airplane](/imgs/Portfolio6_img_1.jpeg)




```python
download_url(search_images('helicopter images', max_images=1)[0], 'helicopter.jpg', show_progress=True)
Image.open('helicopter.jpg').to_thumb(256,256)
```

    Searching for 'helicopter images'




<style>
    /* Turns off some styling */
    progress {
        /* gets rid of default border in Firefox and Opera. */
        border: none;
        /* Needs to be in here for Safari polyfill so background images work as expected. */
        background-size: auto;
    }
    progress:not([value]), progress:not([value])::-webkit-progress-bar {
        background: repeating-linear-gradient(45deg, #7e7e7e, #7e7e7e 10px, #5c5c5c 10px, #5c5c5c 20px);
    }
    .progress-bar-interrupted, .progress-bar-interrupted::-webkit-progress-bar {
        background: #F44336;
    }
</style>





<div>
  <progress value='245760' class='' max='240861' style='width:300px; height:20px; vertical-align: middle;'></progress>
  102.03% [245760/240861 00:00&lt;00:00]
</div>

    
![Helicopter](/imgs/Portfolio6_img_2.jpeg)



# Cell 6
In this one is were the search and download happens, in the top is made the path who can be found as a folder for the images to make our sistem more capable to recognize the airplane it's important to get a few examples of airplanes, because of that the search is going to be done in big and small airplanes and obviously one with no other word, the same with the helicopter.


```python
searches = 'airplane','helicopter'
path = Path('airplane_or_helicopter')
from time import sleep

for o in searches:
    dest = (path/o)
    dest.mkdir(exist_ok=True, parents=True)
    download_images(dest, urls=search_images(f'{o}'))
    sleep(10)  # Pause between searches to avoid over-loading server
    download_images(dest, urls=search_images(f'big {o}'))
    sleep(10)
    download_images(dest, urls=search_images(f'small {o}'))
    sleep(10)
    resize_images(path/o, max_size=400, dest=path/o)
```

    Searching for 'airplane'
    Searching for 'big airplane'
    Searching for 'small airplane'
    Searching for 'helicopter'
    Searching for 'big helicopter'
    Searching for 'small helicopter'


# Cell 7
This cell is to verify how many images got problems when were being downloaded



```python
failed = verify_images(get_image_files(path))
failed.map(Path.unlink)
len(failed)
```

    14



# Cell 8
Here is where we build the DataBlock which is basicly our block of images or itens that we are going to use for teaching the machine how to recognize the image. To do that we have to define wich tipe of the data is and padronize them.


```python
dls = DataBlock(
    blocks=(ImageBlock, CategoryBlock),
    get_items=get_image_files,
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=[Resize(192, method='squish')]
).dataloaders(path, bs=32)

dls.show_batch(max_n=6)
```

![Labels](/imgs/Portfolio6_img_3.jpeg)
    

# Cell 9
Now resnet18 learn how to identify what is a airplane through the DataBlock, and we can chose how many times the traning is going to take.


```python
learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(6)
```



<style>
    /* Turns off some styling */
    progress {
        /* gets rid of default border in Firefox and Opera. */
        border: none;
        /* Needs to be in here for Safari polyfill so background images work as expected. */
        background-size: auto;
    }
    progress:not([value]), progress:not([value])::-webkit-progress-bar {
        background: repeating-linear-gradient(45deg, #7e7e7e, #7e7e7e 10px, #5c5c5c 10px, #5c5c5c 20px);
    }
    .progress-bar-interrupted, .progress-bar-interrupted::-webkit-progress-bar {
        background: #F44336;
    }
</style>




<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>error_rate</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0.727923</td>
      <td>0.143264</td>
      <td>0.050505</td>
      <td>00:59</td>
    </tr>
  </tbody>
</table>




<style>
    /* Turns off some styling */
    progress {
        /* gets rid of default border in Firefox and Opera. */
        border: none;
        /* Needs to be in here for Safari polyfill so background images work as expected. */
        background-size: auto;
    }
    progress:not([value]), progress:not([value])::-webkit-progress-bar {
        background: repeating-linear-gradient(45deg, #7e7e7e, #7e7e7e 10px, #5c5c5c 10px, #5c5c5c 20px);
    }
    .progress-bar-interrupted, .progress-bar-interrupted::-webkit-progress-bar {
        background: #F44336;
    }
</style>




<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>error_rate</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0.206858</td>
      <td>0.173917</td>
      <td>0.040404</td>
      <td>01:39</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.137712</td>
      <td>0.165195</td>
      <td>0.040404</td>
      <td>01:39</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.091966</td>
      <td>0.070337</td>
      <td>0.030303</td>
      <td>01:28</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.071242</td>
      <td>0.074293</td>
      <td>0.020202</td>
      <td>01:38</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0.056014</td>
      <td>0.063764</td>
      <td>0.030303</td>
      <td>01:37</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0.043430</td>
      <td>0.068014</td>
      <td>0.030303</td>
      <td>01:37</td>
    </tr>
  </tbody>
</table>


# Cell 10
In this one we are just going to see some results of the tests, if resnet18 have learned enough. If the names are all green it means the it was a success and if some of them are different from the other in the same image and also red it means that the test failed.


```python
learn.show_results(max_n=9)
```



<style>
    /* Turns off some styling */
    progress {
        /* gets rid of default border in Firefox and Opera. */
        border: none;
        /* Needs to be in here for Safari polyfill so background images work as expected. */
        background-size: auto;
    }
    progress:not([value]), progress:not([value])::-webkit-progress-bar {
        background: repeating-linear-gradient(45deg, #7e7e7e, #7e7e7e 10px, #5c5c5c 10px, #5c5c5c 20px);
    }
    .progress-bar-interrupted, .progress-bar-interrupted::-webkit-progress-bar {
        background: #F44336;
    }
</style>

    
![Results](/imgs/Portfolio6_img_4.jpeg)


# Cell 11
Here is our final and last cell, in this one we are testing if the resnet18 is able to recognize the first airplane image shown in the project.
Right below is the probability of the image to be a airplane.


```python
is_airplane,_,probs = learn.predict(PILImage.create('airplane.jpg'))
print(f" {is_airplane}.")
print(f"It's a airplane: {probs[0]:.4f}")
```



<style>
    /* Turns off some styling */
    progress {
        /* gets rid of default border in Firefox and Opera. */
        border: none;
        /* Needs to be in here for Safari polyfill so background images work as expected. */
        background-size: auto;
    }
    progress:not([value]), progress:not([value])::-webkit-progress-bar {
        background: repeating-linear-gradient(45deg, #7e7e7e, #7e7e7e 10px, #5c5c5c 10px, #5c5c5c 20px);
    }
    .progress-bar-interrupted, .progress-bar-interrupted::-webkit-progress-bar {
        background: #F44336;
    }
</style>







     airplane.
    It's a airplane: 1.0000




