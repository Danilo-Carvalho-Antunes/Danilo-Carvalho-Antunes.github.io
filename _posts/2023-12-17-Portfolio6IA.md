---
title: Portfolio 6 IA 
date: 2023-12-17 15:00:00 -0400
categories: [studies,ai,portfolio6]
tags: [ai,studies]
---

# **Introduction**
Machine Learning, a pivotal branch of artificial intelligence, has revolutionized the way we interact with technology and data. At its core, Machine Learning is about enabling machines to learn from data, identify patterns, and make decisions with minimal human intervention. This fascinating field blends computer science with statistics, offering innovative solutions to complex problems across various industries. From predictive analytics in business to advancements in healthcare diagnostics, Machine Learning's impact is profound and far-reaching.

In this exploration of Machine Learning, we delve into its fundamental concepts, types, and algorithms. We'll discuss how machines use both supervised and unsupervised learning to make sense of vast datasets, the intricate dance of balancing overfitting and underfitting in model training, and the exciting realms of neural networks and deep learning, which mirror the workings of the human brain.

We also touch upon the crucial aspect of Explainable Artificial Intelligence (XAI), which seeks to make AI decisions transparent and understandable, fostering trust and accessibility. As we journey through these topics, we'll gain a deeper appreciation for the complexities and capabilities of Machine Learning and its transformative potential in shaping our digital future.

# **Machine Learning**

Machine Learning (ML) is a branch of artificial intelligence that focuses on the development of algorithms and statistical models enabling computers to perform tasks based on recognizing patterns and making inferences from data, rather than following explicit instructions. This concept is akin to the way a child learns to identify a airplane - not by seeing every airplane in the world but by observing different airplanes and recognizing the common characteristics that define them.

The significance of Machine Learning extends far beyond a technological trend; it's a transformative tool reshaping our world. For instance, when Netflix recommends a film tailored to your taste, that's Machine Learning at work.

Moreover, ML underpins many applications we use daily. It powers virtual assistants on smartphones that understand and respond to voice commands, and it drives automatic translation software, breaking down language barriers and facilitating global communication.

![IA](/imgs/Portfolio6_img_5.png)_Image Create by Chat-GPT4, a Machine Learning_

## **Supervised Learning** 
Is akin to a guided teaching approach where the learner, like a student, is directed towards the right answer by a teacher. In ML, the 'teacher' is a dataset with labeled examples, containing both the input data and the desired output. For instance, to create a spam detection system, a supervised learning model would be trained on a dataset labeled as 'spam' or 'not spam,' enabling it to recognize patterns and classify new emails accurately.

## **Unsupervised Learning**
On the other hand, is like a child exploring and learning from their environment without guidance. The child, or in this case, the model, identifies patterns and structures in the data without any predefined labels. An example is an online retailer using unsupervised learning to segment customers into distinct groups based on purchasing behavior and preferences, revealing patterns that might not be immediately obvious to humans.

## **Reinforcement Learning** 
Resembles training a pet with rewards and corrections. The learning entity receives rewards for correct actions and penalties for incorrect ones. Over time, it learns to associate certain actions with positive outcomes. A prime example of this is AlphaGo, developed by DeepMind. AlphaGo continually improved by playing numerous games against itself, learning from each move and adjusting strategies based on the outcomes, effectively using reinforcement learning principles.

**Each type of learning - supervised, unsupervised, and reinforcement - offers unique approaches to machine learning, catering to different needs and complexities in data analysis and decision-making. They collectively represent the diverse and adaptable nature of ML in understanding and solving a wide array of problems.**

## **Classification and Regression**

In Machine Learning, we often deal with two primary tasks: classification and regression, along with other essential processes like feature extraction and data pre-processing, and the balancing act of avoiding overfitting and underfitting.

**Classification** involves predicting categorical responses. For instance, determining whether an email is 'spam' or 'not spam' is a classification problem. **Regression**, however, deals with predicting continuous, usually numerical responses, like estimating a house's price based on features such as location, size, and number of rooms.

**Feature Extraction** is akin to pinpointing key attributes that define an object for easier identification. In Machine Learning, this means identifying the most relevant variables in the data that aid in predicting the target variable efficiently. For a house pricing model, relevant features might include location, size, age, and room count.

**Pre-processing** in Machine Learning is similar to prepping ingredients before cooking – it involves cleaning, transforming, and organizing the data. This step may include handling missing data, normalization, standardization, and encoding categorical variables to make the raw data more suitable for ML algorithms.

## **Overfitting and Underfitting**
Lastly, the concepts of **Overfitting and Underfitting** in Machine Learning can be compared to wearing ill-fitting clothes. Overfitting is like an overly tight outfit - the model is excessively complex and learns the noise in the training data along with the underlying patterns, leading to poor performance on new data due to lack of generalization. Underfitting, akin to wearing an overly loose outfit, happens when a model is too simplistic to capture all the patterns in the data, resulting in poor performance on both training and unseen data.

![Overfiting and Underfiting](/imgs/Portfolio6_img_6.png)_Image Create by Chat-GPT4, Overfiting and Underfiting from the ideia above_

In summary, successful machine learning involves choosing the right type of model (classification or regression), extracting and processing features effectively, and ensuring the model fits the data just right, avoiding both overfitting and underfitting. These steps are crucial for developing robust, efficient, and accurate predictive models.

## **Supervised Learning Algorithms** 
In supervised learning, several algorithms stand out for their unique approaches and applications:

**K-Nearest Neighbors (KNN)** is akin to seeking advice from your closest neighbors or friends. This algorithm classifies a new data point based on the classifications of its nearest neighbors in the feature space. It's like determining if you should watch a new movie by asking friends with similar tastes. In ML, KNN is used for classifying an item by looking at the most similar items (nearest neighbors) in the dataset.

**Linear Models** are like drawing the shortest straight line between two points. They aim to establish a linear relationship between independent variables (features) and the dependent variable (outcome). Linear Regression, for instance, predicts a continuous outcome (like a house's price) based on its features. Logistic Regression, on the other hand, predicts probabilities mapped to discrete categories (like classifying emails as ‘spam’ or ‘not spam’).

**Bayesian Classifiers** resemble a detective piecing together clues and probabilities. They rely on Bayes' Theorem to calculate conditional probabilities, making them particularly useful in situations with limited data or where event uncertainty must be considered. The Naive Bayes classifier, a popular Bayesian model, is frequently employed in text classification tasks such as spam filtering, where it classifies texts based on the likelihood of them belonging to certain categories.

## **Neural Network and Deep Learning**
Neural Networks and Deep Learning are similar to the human brain, with its intricate web of interconnected neurons. In a similar fashion, neural networks in machine learning consist of nodes or 'neurons' that pass information to each other, much like how synapses connect neurons in the brain. Deep Neural Networks, a subset of deep learning, feature multiple layers of these nodes, enabling them to learn and represent data in increasingly complex ways.

A prime example of neural networks' capabilities is evident in technologies like Chat-GPT4. This advanced system emulates human conversation, responding to a wide array of questions, assisting with code, everyday tasks, and even creating images. Its ability to understand and interact across diverse topics showcases the power and versatility of deep neural networks in capturing and processing complex patterns and information, much like our own brains.

![Neural Network](/imgs/Portfolio6_img_7.png)_Image Create by Chat-GPT4, Neural Network_

## **Explainable Artificial Intelligence (XAI)**
Explainable Artificial Intelligence (XAI) can be likened to a transparent and approachable educator who not only provides the answers but also elucidates the thought process behind them. XAI aims to make machine learning models more comprehensible and justifiable for human understanding. This becomes increasingly vital as machine learning models grow in complexity and find applications in critical areas like healthcare and justice. XAI fosters trust, aids in error identification and correction, and meets legal and ethical standards.

XAI techniques are akin to a diverse toolkit, each tool designed for specific purposes. For instance, LIME (Local Interpretable Model-agnostic Explanations) is a technique that explains individual predictions of any classifier or regressor in a comprehensible manner. It does so by creating an understandable local approximation near the explained prediction.

Another technique, Anchors, offers high-level decision rules that provide "anchoring" for the prediction with sufficient conditions. For example, an anchoring rule in a credit model might state, “If an applicant's annual income exceeds $50,000 and there have been no payment delays in the past six months, the credit application is likely to be approved.”

Both LIME and Anchors offer different yet complementary insights into a machine learning model's decision-making process, enhancing human understanding and trust in these models. They represent XAI's broader mission to bridge the gap between advanced machine learning techniques and human interpretability, ensuring that AI remains accountable and transparent in critical decision-making processes.

![Explainable Artificial Intelligence](/imgs/Portfolio6_img_8.png)_Image Create by Chat-GPT4, Explainable Artificial Intelligence_


## **Unsupervised Learning Algorithms** 
In unsupervised learning, algorithms like K-means Clustering and Self-Organizing Maps (SOM) play crucial roles in discovering patterns and structures within data without pre-defined labels.

**K-means Clustering** can be likened to sorting a diverse collection of books in a library without a predetermined category system. As a librarian, you would examine the titles and summaries, grouping books based on similarities. Similarly, K-means clustering in machine learning groups a dataset into 'k' distinct clusters based on their attributes, ensuring that data within each cluster are more similar to each other than to those in different clusters. This process is akin to creating thematic sections in the library based on the content of the books.

**Self-Organizing Maps (SOM)**, on the other hand, resemble a social gathering where people naturally cluster based on shared interests. Picture a room full of diverse professionals like scientists, artists, musicians, and athletes. Over time, they tend to form groups with those who share similar interests. In machine learning, SOMs take high-dimensional input data and create a low-dimensional (often two-dimensional) representation, preserving the topological properties. This technique effectively reduces data complexity while retaining critical relationships, much like observing the natural grouping of people in a social setting to understand common threads.


## **Reinforcement Learning**
Reinforcement Learning (RL) is akin to mastering a video game. Initially, you're unfamiliar with the controls and outcomes of your actions, and you learn through trial and error. Over time, you grasp the game's rules and improve your gameplay.

### **Q-Learning**
In RL is like keeping a journal of your gaming experiences, noting down which actions led to the best outcomes. This journal is analogous to the Q-function in machine learning. Q-Learning, a method within RL, aims to learn the optimal policy that maximizes total expected rewards. A real-world application of Q-Learning is Google DeepMind's autonomous navigation system, which uses this technique to train virtual agents to navigate complex environments.

### **Reward and Exploration**
The concepts of **Reward and Exploration** in RL can be compared to a monkey solving puzles for the food. The monkey think for a solution (exploration) and is rewarded with food upon finding it. In machine learning, rewards provide feedback to the algorithm on the success of its actions. Exploration involves the algorithm trying out various actions to determine which yields the highest reward.

![a cute monkey solving a puzle for food](/imgs/Portfolio6_img_9.png)_Image Create by Chat-GPT4, a cute monkey solving a puzle for food_

Balancing exploration (trying new actions) and exploitation (repeating known successful actions) is essential in RL. This balance ensures that the algorithm doesn't settle for a suboptimal solution or waste too much time searching for the perfect action. Like a video game player who must try different strategies to win, an RL algorithm needs to balance exploration and exploitation to learn effectively and adapt to dynamic environments.

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

# **Conclusion**
In our comprehensive exploration of Machine Learning (ML), we've traversed various facets of this dynamic and ever-evolving field. From the foundational algorithms of supervised and unsupervised learning to the complexities of neural networks and deep learning, ML stands as a testament to the incredible advancements in artificial intelligence.

We've seen how supervised learning algorithms like K-Nearest Neighbors, Linear Models, and Bayesian Classifiers meticulously categorize and predict data, while unsupervised methods like K-means Clustering and Self-Organizing Maps uncover hidden structures within datasets. Reinforcement Learning, akin to learning through trial and error, opens doors to adaptive and intelligent systems capable of making autonomous decisions.

The intriguing world of Q-Learning demonstrates the power of iterative improvement and optimization in AI, mirroring human learning processes. Meanwhile, the balance of exploration and exploitation in Reinforcement Learning mirrors life's constant quest for equilibrium between trying new experiences and leveraging known successes.

As AI systems become more prevalent and complex, Explainable Artificial Intelligence (XAI) emerges as a crucial aspect, ensuring transparency, trust, and ethical compliance. XAI aims to make AI's decision-making process as understandable as a human explanation, bridging the gap between high-level machine reasoning and human comprehension.

Concluding our journey, it's evident that Machine Learning isn't just a technological marvel; it's a lens through which we can view and understand the complexities of both the digital and natural worlds. As ML continues to evolve and integrate into various sectors, from healthcare to finance, it holds the promise of unlocking further innovations and solutions to some of the most challenging problems faced by humanity. The future of ML is not just about machines learning; it's about us learning, growing, and evolving alongside them.

# **References**

- Professor's slides and class material.
- Chat-GPT4.
- JAMES, G.; WITTEN, D.; HASTIE, T.; TIBSHIRANI, R. [An introduction to statistical learning](https://www.springer.com/gp/book/9781461471370). New York: Springer, 2013.
- HASTIE, T.; TIBSHIRANI, R.; FRIEDMAN, J. The elements of statistical learning: data mining, inference, and prediction. New York: Springer, 2009.
- AIEDUCATOR894. [Explainable Artificial Intelligence (XAI)](https://medium.com/@aieducator894/explainable-artificial-intelligence-xai-9045c885938e). Medium, 2023.
- DOSHI-VELEZ, F.; KIM, B. [Towards a rigorous science of interpretable machine learning](https://arxiv.org/abs/1702.08608). arXiv preprint arXiv:1702.08608, 2017.
- MOLNAR, C. [Interpretable machine learning](https://christophm.github.io/interpretable-ml-book/). Raleigh: Lulu.com, 2020.
